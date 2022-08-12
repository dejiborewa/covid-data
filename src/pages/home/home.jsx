import styled from "styled-components";
import { useGetDataQuery } from "../../api/api";
import TotalCard from "../../components/totalCard";

const TableRow = styled.tr`
  :nth-child(even) {
    background-color: rgb(74 222 128);
    color: white;
  }
`;
const Home = () => {
  const { data, isLoading, isError } = useGetDataQuery();

  const date = new Date();
  const today = date.toDateString();

  if (isError) {
    return (
      <div className="w-full">
        <h3 className="text-center">Error loading data</h3>
      </div>
    );
  }

  return (
    <main className="bg-white w-[90%] mx-auto mt-6 md:w-[70%] md:mt-12 lg:w-[60%] xl:w-[50%]">
      <div>
        <h3 className="font-[700] text-[18px]">COVID-19 NIGERIA</h3>
        <span>{today}</span>
      </div>

      <TotalCard
        title="Sample Tested"
        color="bg-amber-300"
        number={isLoading ? "..." : data?.data?.totalSamplesTested.toLocaleString()}
      />
      <TotalCard
        title="Confirmed Cases"
        color="bg-lime-500"
        number={isLoading ? "..." : data?.data?.totalConfirmedCases.toLocaleString()}
      />
      <TotalCard
        title="Active Cases"
        color="bg-green-400"
        number={isLoading ? "..." : data?.data?.totalActiveCases.toLocaleString()}
      />
      <TotalCard
        title="Discharged Cases"
        color="bg-teal-400"
        number={isLoading ? "..." : data?.data?.discharged.toLocaleString()}
      />
      <TotalCard
        title="Death"
        color="bg-rose-500"
        number={isLoading ? "..." : data?.data?.death.toLocaleString()}
      />

      {isLoading ? (
        <div className="w-full">
          <h3 className="text-center">Loading data</h3>
        </div>
      ) : (
        <div>
          <table className="w-full block overflow-x-scroll mt-8 md:overflow-auto">
            <div className="text-md text-center my-4 font-[700] md:my-6">
              Confirmed Cases by States
            </div>
            <thead className="flex gap-6 text-sm overflow-x-scroll  py-4 border-b border-black md:grid md:grid-cols-5 md:text-base md:overflow-auto text-center">
              <tr>State</tr>
              <tr>Cases on admission</tr>
              <tr>Confirmed Cases</tr>
              <tr>Discharged</tr>
              <tr>Death</tr>
            </thead>

            <tbody className="w-full block">
              {data?.data?.states?.map((item, index) => (
                <TableRow
                  key={index}
                  className="flex gap-6 text-sm overflow-x-scroll py-4 md:grid md:grid-cols-5 md:text-base border-b md:overflow-auto border-black text-center"
                >
                  <td className="min-w-[20%]">{item?.state}</td>
                  <td className="min-w-[20%]">{item?.casesOnAdmission}</td>
                  <td className="min-w-[20%]">{item?.confirmedCases}</td>
                  <td className="min-w-[20%]">{item?.discharged}</td>
                  <td className="min-w-[20%]">{item?.death}</td>
                </TableRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default Home;
// isLoading, isError, error, isFetching
