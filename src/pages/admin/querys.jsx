import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../layout/mainLayout";
import { getQueries } from "../../applicationStates/reduxSlices/contactUsSlice";
import QueryCard from "../../components/query/queryCard";

function Queries() {
    const dispatch = useDispatch();

    const allQueries = useSelector((state) => state.contactus.queries);
    const loading = useSelector((state) => state.contactus.loading);

    useEffect(() => {
        dispatch(getQueries());
    }, [dispatch]);

    return (
        <MainLayout>
            <div className="min-h-screen bg-base-100 px-5 md:px-10 lg:px-20 py-10">

                {/* Header */}
                <div className="mb-10">
                    <p className="text-primary font-semibold uppercase tracking-widest text-sm font-secondary">
                        Admin Panel
                    </p>

                    <h1 className="text-4xl font-black mt-1 font-primary">
                        User Queries
                    </h1>

                    <p className="text-base-content/50 mt-2 font-secondary">
                        View queries and messages submitted by users.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex justify-center py-20">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                )}

                {/* No Queries */}
                {!loading && allQueries?.length === 0 && (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold">
                            No queries yet
                        </h2>

                        <p className="text-base-content/50 mt-2">
                            User queries will appear here.
                        </p>
                    </div>
                )}

                {/* Query Cards */}
                {!loading && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {allQueries?.map((query) => <QueryCard key={query._id} subject={query.subject} email={query.email} message={query.message} />)}
                    </div>
                )}

            </div>
        </MainLayout>
    );
}

export default Queries;