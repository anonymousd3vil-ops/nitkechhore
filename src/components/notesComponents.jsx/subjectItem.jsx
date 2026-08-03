function SubjectItem({subject}){
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
              <a>📖 Notes</a>
            </li>   

            <li>
              <a>📝 Previous Year Questions</a>
            </li>
          </ul>
        </details>
      </li>
    );
}

export default SubjectItem;