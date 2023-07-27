import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IconSearch, IconTrash } from './src/assets/images';
import IconImage from './src/theme/Layouts/IconImage';
import Api from './src/services/Api';

function App() {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');

  async function buscarCep() {
    if(cep == '') {
      Alert.alert('Cep inválido!');
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
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>
          Buscador de CEP
        </Text>
      </View>

      <View style={styles.formRow}>
        <View 
        style={styles.fieldItem} 
        style={{ width: '60%' }}>
          <Text style={styles.label}>
            CEP:
          </Text>

          <TextInput 
            style={styles.fieldPattern}
            placeholder="Ex: 12345-678"
            value={cep}
            onChangeText={(text) => setCep(text)} 
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity 
            style={styles.buttonSearch}
            onPress={buscarCep}
          >
            <IconImage source={IconSearch} width={25} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonTrash}
            onPress={clearFields}
          >
            <IconImage source={IconTrash} width={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formRow}>
        <View style={styles.fieldItem}>
          <Text style={styles.label}>
            Logradouro:
          </Text>
          
          <TextInput 
            style={styles.fieldPattern} 
            placeholder="Ex: 12345-678" 
            value={logradouro}
            onChangeText={(text) => setLogradouro(text)}
          />
        </View>

        <View style={styles.fieldItem}>
          <Text style={styles.label}>
            Bairro:
          </Text>
          
          <TextInput 
            style={styles.fieldPattern}
            value={bairro}
            onChangeText={(text) => setBairro(text)} 
          />
        </View>

        <View style={styles.fieldItem} style={{ width: '70%' }}>
          <Text style={styles.label}>
            Cidade:
          </Text>
          
          <TextInput 
            style={styles.fieldPattern}
            value={localidade}
            onChangeText={(text) => setLocalidade(text)} 
          />
        </View>

        <View style={styles.fieldItem} style={{ width: '25%' }}>
          <Text style={styles.label}>
            Estado:
          </Text>
          
          <TextInput 
            style={styles.fieldPattern} 
            value={uf}
            onChangeText={(text) => setUf(text)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 80,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C00FF'
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFF'
  },

  container: {
    flex: 1,
    backgroundColor: '#FCFCFC'
  },

  formRow: {
    marginBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  fieldItem: {
    width: '100%',
    marginBottom: 16,
  },

  label: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#0A0A0A'
  },

  fieldPattern: {
    height: 60,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
    fontWeight: '500',
    color: '#0A0A0A'
  },

  buttonWrapper: {
    flex: 1,
    paddingTop: 38,
    paddingLeft: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },

  buttonSearch: {
    flex: 1,
    height: 60,
    marginRight: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0088FF'
  },

  buttonTrash: {
    flex: 1,
    height: 60,
    marginRight: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF003D'
  }
});

export default App;
