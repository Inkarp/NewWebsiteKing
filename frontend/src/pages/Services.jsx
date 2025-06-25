import BcomCourses from "./Services/BcomCourses";
import BTechCourses from "./Services/BTechCourses";
import Cse from "./Services/Cse";
import Intermediate from "./Services/Intermediate";
import MBACourses from "./Services/MBACourses";
import MBAFinanceCourses from "./Services/MBAFinanceCourses";

import TenthGrade from "./Services/TenthGrade";


export default function Services() {
    return (
  <section className="p-8 bg-gray-50">

    <Intermediate />
    <Cse />
    <BcomCourses />
    <BTechCourses />
    <TenthGrade />
    <MBACourses />
    <MBAFinanceCourses />
  </section>
);
}


