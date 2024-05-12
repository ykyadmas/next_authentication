import SignIn from './components/SignInPage';


interface Props{
  engineerSurveyId:number;
}
export default async function Home({engineerSurveyId}:Props) {

  return (
    <div>
      <SignIn engineerSurveyId={engineerSurveyId}/>
        </div>
  )
}
