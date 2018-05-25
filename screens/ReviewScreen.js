import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => { navigation.navigate('settings'); }}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    )
  });

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const { id, title, company, company_logo, location, url } = job;
      return (
        <Card key={id}>
          <View>
            <View style={{ flex: 2 }}>
              <Image source={{ uri: company_logo }} style={styles.companyLogo} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textStyle}>{title}</Text>
              <Text style={styles.companyStyle}>{company} - {location}</Text>
              <Button
                title="Apply Now"
                onPress={() => Linking.openURL(url)}
                icon={{ name: 'assignment' }}
                backgroundColor="#81C784"
              />
            </View>
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#55595e'
  },
  companyStyle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 10
  },
  companyLogo: {
    height: 150,
    alignSelf: 'stretch',
    marginBottom: 10,
    flex: 1
  }
};

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
