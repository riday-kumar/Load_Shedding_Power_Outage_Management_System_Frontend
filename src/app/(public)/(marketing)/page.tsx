import CallCenter from "@/components/modules/home/CallCenter";
import HomeCarousel from "@/components/modules/home/carousel";
import Companies from "@/components/modules/home/Companies";
import HowPowerSyncWorks from "@/components/modules/home/HowPowerSyncWorks";
import NoticeAndJobs from "@/components/modules/home/NoticeAndJobs";
import SubscriptionSection from "@/components/modules/home/SubscriptionSection";
import YouTubeVideos from "@/components/modules/home/YoutubeVideos";

const HomePage = () => {
  return (
    <div className="space-y-5 my-10">
      <HomeCarousel />
      <Companies />
      <NoticeAndJobs />
      <CallCenter />
      <HowPowerSyncWorks />
      <SubscriptionSection />
      <YouTubeVideos />
    </div>
  );
};

export default HomePage;
