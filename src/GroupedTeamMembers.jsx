import React from "react";
import { useState } from "react";
const GoupedTeamMembers = ({ employess, selectedTeam, setTeam }) => {
  const [groupedEmloyees, setGroupedEmployess] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];
    var teamMembers = employess.filter((employee) => employee.teamName === "TeamA");
    var teamA = { team: "TeamA", members: teamMembers, collapsed: selectedTeam === "TeamA" ? false : true };
    teams.push(teamA);
    var teamMembers = employess.filter((employee) => employee.teamName === "TeamB");
    var teamB = { team: "TeamB", members: teamMembers, collapsed: selectedTeam === "TeamB" ? false : true };
    teams.push(teamB);
    var teamMembers = employess.filter((employee) => employee.teamName === "TeamC");
    var teamC = { team: "TeamC", members: teamMembers, collapsed: selectedTeam === "TeamC" ? false : true };
    teams.push(teamC);
    var teamMembers = employess.filter((employee) => employee.teamName === "TeamD");
    var teamD = { team: "TeamD", members: teamMembers, collapsed: selectedTeam === "TeamD" ? false : true };
    teams.push(teamD);
    return teams;
  }

  function handleTeamClick(event) {
    var transformedGroupedData = groupedEmloyees.map((groupedData) =>
      groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData
    );
    setGroupedEmployess(transformedGroupedData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className='container'>
      {groupedEmloyees.map((item) => {
        return (
          <div key={item.team} className='card mt-2'>
            <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
              Team Name: {item.team}
            </h4>
            <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
              <hr />
              {item.members.map((member) => {
                return (
                  <div className='mt-2'>
                    <h5 className='card-title mt-2'>
                      <span className='text-dark'>Full Name: {member.fullName}</span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GoupedTeamMembers;
