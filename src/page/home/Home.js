import Chart from "../../cpmponent/chart/Chart";
import FeaturedInfo from "../../cpmponent/featuredInfo/FeaturedInfo"
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../cpmponent/widgetSm/WidgetSm";
import WidgetLg from "../../cpmponent/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
