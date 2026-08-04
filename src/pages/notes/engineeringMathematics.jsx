import { useDispatch } from "react-redux";
import MainLayout from "../../layout/mainLayout.jsx";
import { getSem1Notes } from "../../applicationStates/reduxSlices/notesSlice.js";

function EMaths(){
    const dispatch = useDispatch();

    dispatch(getSem1Notes());
    return(
        <MainLayout>
            this maths notes section
        </MainLayout>
    );
}

export default EMaths;