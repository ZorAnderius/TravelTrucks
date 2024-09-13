import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVehicleById } from "../../redux/vehicle/operation";
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  Container,
  Loader,
  Section,
  VehicleDetails,
  VehicleNavigation,
} from "../../components";
import { ROUTES_NAME } from "../../helpers";

const CatalogDetails = () => {
  const {id} = useParams();
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
          <VehicleNavigation />
          <div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default CatalogDetails;
