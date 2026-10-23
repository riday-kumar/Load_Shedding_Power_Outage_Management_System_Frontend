import CallCenter from "@/components/modules/home/CallCenter";
import PowerOverview from "@/components/modules/home/Companies";
import HowPowerSyncWorks from "@/components/modules/home/HowPowerSyncWorks";
import NoticeAndJobs from "@/components/modules/home/NoticeAndJobs";
import PowerDistributionCompanies from "@/components/modules/home/PowerDistributionCompanies";
import SubscriptionSection from "@/components/modules/home/SubscriptionSection";
import YouTubeVideos from "@/components/modules/home/YoutubeVideos";

const HomePage = () => {
  return (
    <div className="space-y-5 my-10">
      <PowerDistributionCompanies />
      <PowerOverview />
      <NoticeAndJobs />
      <CallCenter />
      <HowPowerSyncWorks />
      <SubscriptionSection />
    </div>
  );
};

export default HomePage;
