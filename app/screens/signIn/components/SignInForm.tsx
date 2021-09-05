import React, {useState} from 'react';
import {Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

type Props = {
  onLogin: (email: string, password: string) => void;
};

export default function SignInForm({onLogin}: Props) {
  const [email, setemail] = useState('');
  const [hasEmailError, sethasEmailError] = useState<string | undefined>();
  const [password, setpassword] = useState('');
  const [hasPasswordError, sethasPasswordError] = useState<
    string | undefined
  >();

  const checkFormCredentials = () => {
    if (!email?.length) {
      sethasEmailError('e-mail required');
    }
    if (!password?.length) {
      sethasPasswordError('password required');
    }

    if (email?.length && password?.length) {
      onLogin(email, password);
    }
  };

  return (
    <>
      <Input placeholder="E-Mail" value={email} onChangeText={setemail} />
      {hasEmailError && <Text>{hasEmailError}</Text>}
      <Input placeholder="sifre" value={password} onChangeText={setpassword} />
      {hasPasswordError && <Text>{hasPasswordError}</Text>}
      <Button label="Sign In" onPress={checkFormCredentials} />
    </>
  );
}
