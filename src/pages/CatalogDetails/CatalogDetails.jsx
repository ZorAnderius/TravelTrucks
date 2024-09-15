import React, { Suspense, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicleById } from "../../redux/vehicle/operation";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  BookingForm,
  Container,
  Loader,
  Section,
  VehicleDetails,
  VehicleNavigation,
} from "../../components";
import { ROUTES_NAME } from "../../helpers";
import styles from "./CatalogDetails.module.css";
import { selectLoader } from "../../redux/vehicle/selector";

const CatalogDetails = React.memo(() => {
  const { id } = useParams();
  const isLoading = useSelector(selectLoader);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const reviewRef = useRef(null);

  useEffect(() => {
    dispatch(fetchVehicleById(id));
  }, [dispatch, id]);

  useEffect(() => {
    !location.pathname?.includes(ROUTES_NAME.vehicleReview) &&
      navigate(ROUTES_NAME.vehicleFeature, { replace: true });
  }, [navigate, location.pathname]);
  

  return isLoading ? (
    <Loader />
  ) : (
    <main>
      <Section css="details">
        <Container>
          <VehicleDetails />
        </Container>
      </Section>
      <Section css="detailsInfo">
        <Container>
          <VehicleNavigation />
          <div className={styles.detailsForm} ref={reviewRef}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <BookingForm />
          </div>
        </Container>
      </Section>
    </main>
  );
});

CatalogDetails.displayName = "CatalogDetails";

export default CatalogDetails;
