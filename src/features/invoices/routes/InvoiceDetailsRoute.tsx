import { GoBackButton } from "@/components/ui/GoBackButton";
import { useNavigate } from "react-router-dom";
import DetailsHeader from "../components/details/DetailsHeader";

const DetailsRoute = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-16">
      <GoBackButton onClick={handleGoBack} />
      <DetailsHeader />
    </div>
  );
};

export default DetailsRoute;
