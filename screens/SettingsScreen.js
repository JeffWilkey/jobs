import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <Button
          title="Clear Liked Jobs"
          backgroundColor="#f44336"
          icon={{ name: 'delete-forever' }}
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
