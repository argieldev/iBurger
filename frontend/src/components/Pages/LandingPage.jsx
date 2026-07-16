import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const branches = [
    { name: "SM Lipa", slug: "sm-lipa" },
    { name: "Robinsons Lipa", slug: "robinsons-lipa" },
    { name: "Batangas City", slug: "batangas-city" },
  ];

  const [branch, setBranch] = useState("");

  function handleRoute(event) {
    event.preventDefault();

    if (!branch) return;

    navigate(`/${branch}/menu`);
  }

  return (
    <div>
      <form onSubmit={handleRoute}>
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="">Select a branch</option>

          {branches.map((branch) => (
            <option key={branch.slug} value={branch.slug}>
              {branch.name}
            </option>
          ))}
        </select>

        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default LandingPage;
