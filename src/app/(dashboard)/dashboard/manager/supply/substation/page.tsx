import PowerDistributeInSubstationForm from "@/components/form/PowerDistributeInSubstationsForm";
import Heading from "@/components/layout/public/Heading";
import AllocatedPowerInfo from "@/components/modules/substation power delivery/page";

const PoweringTheSubstations = () => {
  return (
    <div className="space-y-4">
      <Heading text="Powering the Substations" />
      <div className="">
        <AllocatedPowerInfo />
      </div>
      <div>
        {/* =============== Power Distribution in substation Form Component ============== */}
        <PowerDistributeInSubstationForm />
      </div>
    </div>
  );
};

export default PoweringTheSubstations;
