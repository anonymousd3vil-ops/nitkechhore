import MainLayout from "../../layout/mainLayout.jsx";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

import { group2Subjects1, group2Subjects2 } from "../../constants/notesConstants/group2Subjects.jsx";
import { group1Subjects1, group1Subjects2 } from "../../constants/notesConstants/group1Subjects.jsx";
import { years } from "../../constants/notesConstants/years.js";
import SubjectItem from "../../components/notesComponents.jsx/subjectItem.jsx";

function NotesHomePage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-base-100 px-4 py-10 md:px-10 lg:px-20">
        {/*HEADER*/}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <FaGraduationCap className="text-primary text-4xl" />

            <h1 className="text-3xl md:text-4xl font-bold">Notes Library</h1>
          </div>

          <p className="text-base-content/60 max-w-2xl">
            Find notes, previous year questions, assignments and study material
            for your semester — all in one place.
          </p>

          <div className="divider"></div>
        </div>

        {/*   FIRST YEAR   */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">First Year</h2>

              <p className="text-sm text-base-content/50 mt-1">
                Common subjects for first year students
              </p>
            </div>

            <div className="badge badge-primary badge-outline">FY</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GROUP 1 */}
            <div className="card bg-base-200 shadow-md border border-base-300 hover:shadow-lg transition-all duration-300">
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="card-title">FY Group 1</h3>

                    <p className="text-xs text-base-content/50">
                      Semester Group I
                    </p>
                  </div>

                  <div className="badge badge-primary">6 Subjects</div>
                </div>

                <div className="divider my-2"></div>

                <details open>
                  <summary>Semester 1</summary>
                  <ul className="menu bg-base-100 rounded-box w-full">
                    {group1Subjects1.map((subject, index) => (
                      <SubjectItem key={index} subject={subject} page={subject.page}/>
                    ))}
                  </ul>
                </details>
                <details>
                  <summary>Semester 2</summary>
                  <ul className="menu bg-base-100 rounded-box w-full">
                    {group1Subjects2.map((subject, index) => (
                      <SubjectItem key={index} subject={subject} page={subject.page} />
                    ))}
                  </ul>
                </details>
              </div>
            </div>

            {/* GROUP 2 */}
            <div className="card bg-base-200 shadow-md border border-base-300 hover:shadow-lg transition-all duration-300">
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="card-title">FY Group 2</h3>

                    <p className="text-xs text-base-content/50">
                      Semester Group II
                    </p>
                  </div>

                  <div className="badge badge-secondary">6 Subjects</div>
                </div>

                <div className="divider my-2"></div>

                <details open>
                  <summary>Semester 1</summary>
                  <ul className="menu bg-base-100 rounded-box w-full">
                    {group2Subjects1.map((subject, index) => (
                      <SubjectItem key={index} subject={subject} page={subject.page} />
                    ))}
                  </ul>
                </details>
                <details>
                  <summary>Semester 2</summary>
                  <ul className="menu bg-base-100 rounded-box w-full">
                    {group2Subjects2.map((subject, index) => (
                      <SubjectItem key={index} subject={subject} page={subject.page}/>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/*   OTHER YEARS   */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Explore by Year</h2>

            <p className="text-sm text-base-content/50 mt-1">
              Browse branch and semester-wise study material
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {years.map((year, index) => (
              <div
                key={index}
                className="group card bg-base-200 border border-base-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                      {year.badge}
                    </div>

                    <FaArrowRight className="text-base-content/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold">{year.title}</h3>

                    <p className="text-sm text-base-content/50 mt-1">
                      {year.subtitle}
                    </p>
                  </div>

                  <div className="card-actions mt-4">
                    <button className="btn btn-primary btn-sm btn-outline">
                      Explore Notes
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default NotesHomePage;
