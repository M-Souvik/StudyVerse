import { Route, Routes } from "react-router";
import AllCourses from "./pages/AllCourses";
import CourseDetails from "./pages/CourseDetails";
import Modules from "./pages/Modules";
// import AllMovies from "@/pages/AllMovies";

const AppRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<AllCourses/>}/>
            <Route path="/course/:id" element={<CourseDetails/>}/>
            <Route path="/course/:id/module/:moduleid" element={<Modules/>}/>

        </Routes>
    )
}

export default AppRoutes;