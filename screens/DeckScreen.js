import React, { Component } from 'react';
import { SafeAreaView, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {

  renderCard(item) {
    return (
      <Card
        key={item.id}
        image={{ uri: item.company_logo }}
        containerStyle={{ height: 305 }}
      >
        <Text style={styles.textStyle}>{item.title}</Text>
        <Text style={styles.companyStyle}>{item.company} - {item.location}</Text>
        <Button
          icon={{ name: 'work' }}
          backgroundColor="#03A9F4"
          title="View Job Description!"
          onPress={() => Linking.openURL(item.url)}
        />
      </Card>
    );
  }

  renderNoMoreCards({ navigate }) {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more jobs in this area!
        </Text>
        <Button
          backgroundColor="#03a9f4"
          title="Search another area!"
          onPress={() => navigate('map')}
        />
      </Card>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          navigation={navigation}
        />
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#55595e'
  },
  companyStyle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 30
  }
};

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(mapStateToProps)(DeckScreen);
