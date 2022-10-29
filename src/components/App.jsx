import {Contacts} from "./Contacts/Contacts";
import { Oval } from 'react-loader-spinner';
import { useSelector } from "react-redux";
import { selectLoading } from "redux/contacts/selectorsContacts";

export const App = () => {
      const isLoading = useSelector(selectLoading);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        marginTop: '100px',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Contacts />
      <div style={{position:'absolute', top:'50%'}}>
        {isLoading && <Oval
          height={80}
          width={80}
          color="#223c26"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4c714c"
          strokeWidth={5}
          strokeWidthSecondary={5}/>}
      </div>
    </div>
  );
};
