import TableOfPeriods from "@comp/TableOfPeriods";

const PeriodsPage = () => {
  return (
    <div className="min-h-screen text-yellow-300 bg-purple-800">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <TableOfPeriods />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodsPage;
