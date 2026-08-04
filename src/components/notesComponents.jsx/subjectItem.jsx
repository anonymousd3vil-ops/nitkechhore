import { GiBookshelf } from "react-icons/gi";
import { PiExam } from "react-icons/pi";
import { Link } from "react-router-dom";

function SubjectItem({subject, page}){
    return (
      <li>
        <details>
          <summary className="flex items-center gap-3 font-medium">
            <span className="text-primary text-lg">
              {subject.icon}
            </span>

            <span>{subject.name}</span>
          </summary>

          <ul className="ml-4 mt-1">
            <li>
              <Link to={page}><GiBookshelf/> Notes</Link>
            </li>   

            <li>
              <a><PiExam/> Previous Year Questions</a>
            </li>
          </ul>
        </details>
      </li>
    );
}

export default SubjectItem;