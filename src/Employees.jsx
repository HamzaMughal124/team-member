import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import Teams from "./Teams";

const Employees = ({ employess, selectedTeam, handleEmployeeCardClick, handleTeamSelection }) => {
  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <Teams selectedTeam={selectedTeam} handleTeamSelection={handleTeamSelection} />
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='card-collection'>
            {employess.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"}
                onClick={handleEmployeeCardClick}>
                {employee.gender === "male" ? (
                  <img src={maleProfile} className='card-img-top' alt='male-profile' />
                ) : (
                  <img src={femaleProfile} className='card-img-top' alt='female-profile' />
                )}

                <div className='card-body'>
                  <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                  <p className='card-text'>
                    <strong>Designation:</strong> {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
