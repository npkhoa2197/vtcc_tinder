import React from 'react';
import { View, Text, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatRequestItem from '../../../../components/chatComponents/ChatRequestItem';
import { styles } from './styles';

class ChatRequestScreen extends React.PureComponent {
  static propTypes = {
    pendingChats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })).isRequired,
  };

  keyExtractor = item => item.id;

  renderItemSeparator = () => <View style={styles.separator} />;

  renderItem = item => <ChatRequestItem item={item} />;

  renderSectionHeader = title => <Text style={styles.headerText}>{title}</Text>;

  render() {
    const { pendingChats } = this.props;
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: `Bạn nhận được ${pendingChats.length} yêu cầu chat.`,
              data: pendingChats,
            },
          ]}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => this.renderItem(item)}
          renderSectionHeader={({ section: { title } }) => this.renderSectionHeader(title)}
          ItemSeparatorComponent={this.renderItemSeparator}
          SectionSeparatorComponent={this.renderItemSeparator}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  pendingChats: state.chat.pendingChats,
});

export default connect(mapStateToProps, null)(ChatRequestScreen);
