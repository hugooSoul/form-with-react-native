import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import t from 'tcomb-form-native';

var CustomerService = t.form.Form;

var typeService = t.enums({
  bueno: 'Bueno',
  malo: 'Malo'
});

const Product = t.struct({
  fechaDeServicio: t.Date,
  servicio: t.String,
  personaQueAtendio: t.String,
  cliente: t.String,
  folio: t.String,
  horaDeLlegada: t.Date,
  horaDeSalida: t.Date,
  tipoDeServicio: typeService
});

class Forms extends Component {

  handleSubmit = (e) => {
    const value = this._form.getValue();
    console.log('value: ', value);
    e.preventDefault();
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Revisión de productos</Text>
        <ScrollView>
          <CustomerService
            type={Product}
            ref={c => this._form = c} />

          <Button
            title='Guardar'
            style={styles.placeButton}
            onPress={this.handleSubmit} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Forms;
