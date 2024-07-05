import React, { useState, useEffect } from "react";


function OireachtasMembersList(props) {
  const { members } = props;
  return members.map((member) => (
    <div className="member" key={member.memberCode}>
      <h2>Member Name: {member.fullName}</h2>
      <p>
        PID: {member.pId} URI: {member.uri}
      </p>
    </div>
  ));
}
function OireachtasMembers() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      let data = await (
        await fetch("https://api.oireachtas.ie/v1/members?date_start=1900-01-01&chamber_id=&date_end=2099-01-01&limit=50")
      ).json();

      // flatten this to make it easier to access
      data = data.results.map((result) => result.member);

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);
  return (
    <div>
      <div>
        <OireachtasMembersList members={data} />h
      </div>
    </div>
  );
}

export default OireachtasMembers;