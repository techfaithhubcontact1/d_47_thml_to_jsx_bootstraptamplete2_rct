//1. import area
import Accordion from "../components/Accordion";
import Badges from "../components/Badges";
import Blank from "../components/Blank";
import BootstrapIcons from "../components/BootstrapIcons";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import Charts from "../components/Charts";
import Contact from "../components/Contact";
import DataTables from "../components/DataTables";
import ECharts from "../components/ECharts";
import FQA from "../components/FQA";
import FormEditors from "../components/FormEditors";
import FormElements from "../components/FormElements";
import FormLayouts from "../components/FormLayouts";
import GeneralTables from "../components/GeneralTables";
import Profile from "../components/Profile";
import RemixIcons from "../components/RemixIcons";
import Alerts from "../components/Alerts";
import NiceAdminDashboard from "../pages/NiceAdminDashboard";

//2. defination area
export const routes = [
     {
          path: "/niceadmindashboard",
          element: <NiceAdminDashboard />
     },
     {
          path:"/alerts",
          element:<Alerts />
     },
     {
          path:"/accordion",
          element:<Accordion />
     },
     {
          path:"/badges",
          element:<Badges />
     },
     
     {
          path: "/cards",
          element: <Cards />
     },
     {
          path:"/buttons",
          element:<Buttons />
     },
     {
          path:"/formelements",
          element:<FormElements />
     },
     {
          path:"/formlayouts",
          element:<FormLayouts />
     },
     {
          path: "/formeditors",
          element: <FormEditors />
     },
     {
          path:"/generaltables",
          element:<GeneralTables />
     },
     {
          path:"/datatables",
          element:<DataTables />
     },
     {
          path:"/charts",
          element:<Charts />
     },
     {
          path:"/echarts",
          element:<ECharts />
     },
     {
          path:"/bootstrapicons",
          element:<BootstrapIcons />
     },
     {
          path:"/remixicons",
          element:<RemixIcons />
     },
     {
          path:"/profile",
          element:<Profile />
     },
     {
          path:"/fqa",
          element:<FQA />
     },
     {
          path:"/contact",
          element:<Contact />
     },
     {
          path:"/blank",
          element:<Blank />
     },
     
]

//3. export area