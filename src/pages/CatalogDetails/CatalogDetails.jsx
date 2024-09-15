import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
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

const CatalogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicleById(id));
  }, [dispatch, id]);

  useEffect(() => {
    !location.pathname?.includes(ROUTES_NAME.vehicleReview) &&
      navigate(ROUTES_NAME.vehicleFeature, { replace: true });
  }, [navigate, location.pathname]);

  return (
    <main>
      <Section css="details">
        <Container>
          <VehicleDetails />
        </Container>
      </Section>
      <Section css="detailsInfo">
        <Container>
          <VehicleNavigation />
          <div className={styles.detailsForm}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <BookingForm />
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default CatalogDetails;
