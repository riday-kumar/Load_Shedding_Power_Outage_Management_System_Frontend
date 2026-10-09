import LoadSheddingForm from "@/components/form/LoadSheddingForm";
import Heading from "@/components/layout/public/Heading";

const LoadShedding = () => {
  return (
    <div className="space-y-4">
      <Heading text="Create New Load Shedding" />
      <LoadSheddingForm />
    </div>
  );
};

export default LoadShedding;
