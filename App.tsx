import React, { useState } from 'react';
import { } from 'react-native';
import { IconSearch, IconTrash } from './src/assets/images';
import IconImage from './src/theme/Layouts/IconImage';
import Api from './src/services/Api';
import * as S from './styles';

function App() {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');

  async function buscarCep() {
    if(cep == '') {
      setCep('');
    }

    try {
      const response = await Api.get(`/${cep}/json/`);
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setLocalidade(response.data.localidade);
      setUf(response.data.uf);
    } catch(error) {
      console.log('Erro!', + error);
    }
  }

  function clearFields() {
    setCep('');
    setLogradouro('');
    setBairro('');
    setLocalidade('');
    setUf('');
  }

  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderTitle>
          Buscador de CEP
        </S.HeaderTitle>
      </S.HeaderWrapper>

      <S.FormRow>
        <S.FieldItem width={60}>
          <S.Label>
            CEP:
          </S.Label>

          <S.FieldPattern 
            placeholder="Ex: 12345-678"
            value={cep}
            onChangeText={(text) => setCep(text)} 
          />
        </S.FieldItem>

        <S.ButtonWrapper>
          <S.ButtonPattern 
            backgroundColor={'#0088FF'}
            onPress={buscarCep}
          >
            <IconImage source={IconSearch} width={25} />
          </S.ButtonPattern>

          <S.ButtonPattern 
            backgroundColor={'#FF003D'}
            onPress={clearFields}
          >
            <IconImage source={IconTrash} width={25} />
          </S.ButtonPattern>
        </S.ButtonWrapper>
      </S.FormRow>

      <S.FormRow>
        <S.FieldItem>
          <S.Label>
            Logradouro:
          </S.Label>
          
          <S.FieldPattern
            value={logradouro}
            onChangeText={(text) => setLogradouro(text)}
          />
        </S.FieldItem>

        <S.FieldItem>
          <S.Label>
            Bairro:
          </S.Label>
          
          <S.FieldPattern
            value={bairro}
            onChangeText={(text) => setBairro(text)} 
          />
        </S.FieldItem>

        <S.FieldItem width={70}>
          <S.Label>
            Cidade:
          </S.Label>
          
          <S.FieldPattern 
            value={localidade}
            onChangeText={(text) => setLocalidade(text)} 
          />
        </S.FieldItem>

        <S.FieldItem width={25}>
          <S.Label>
            Estado:
          </S.Label>
          
          <S.FieldPattern 
            value={uf}
            onChangeText={(text) => setUf(text)}
          />
        </S.FieldItem>
      </S.FormRow>
    </S.Container>
  );
}

export default App;
