class Content2 extends React.Component {
  render() {
    return (
      <div>
        <Button10 buttonLabel='Start' />
        <Button10 />
        <Button10 email="foo@bar.com"/>
        <Button10 email="not-valid"/>
        <Button11 title={"1"}/>
        <Button11 title={"2"} buttonLabel='Continue'/>
        {/* <Button11 title={1}/> */}
        <Button11 email="foo@bar.com"/>
        <Button11 email="not-valid"/>
      </div>
    )
  }
}