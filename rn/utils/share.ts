import * as Sharing from 'expo-sharing';
import { Share } from 'react-native';

const shareNative = async (
  shareUrl: string,
  title: string,
  subject: string,
  message: string,
  dialogTitle: string
) => {
  try {
    const result = await Share.share(
      {
        title: title,
        url: shareUrl,
        message: message,
      },
      { dialogTitle: dialogTitle, subject: subject }
    );
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        return { result: result, event: 'shared-with-result-activity-type' };
      } else {
        // shared
        return { result: result, event: 'shared' };
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      return { result: result, event: 'dismissed' };
    }
  } catch (error) {
    return { error: error };
  }
};

export const share = async (
  shareUrl: string,
  title: string,
  subject: string,
  message: string,
  dialogTitle: string
) => {
  try {
    const available = await Sharing.isAvailableAsync();
    if (!!available) {
      return shareNative(shareUrl, title, subject, message, dialogTitle).then(
        (result) => result
      );
    } else {
      // dismissed
      return { result: '', event: 'dismissed', error: null };
    }
  } catch (error) {
    return { error: error };
  }
};
