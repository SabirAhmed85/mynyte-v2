import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

import { useTheme } from '../../config/ThemeManager';
import { View } from '../Themed';
import { styles } from './WebView.style';

type WebViewProps = {
};

type NavStateProps = {
  url?: string;
  title?: string;
  loading?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
};

export const WebViewPage = (props: WebViewProps) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [currentUrl, setCurrentUrl] = React.useState('');
  const [webviewOpacity, setWebviewOpacity] = React.useState(0);
  let webview: any = null;
  let initialJsRun = false;

  const runBeforeLoad = `
    window.isNativeApp = true;
    true;
  `;

  const runOnLoadGeneralTest = (!initialJsRun) ? `
    function onLoad() {
      if (!document.body.classList.contains('mynyte-js-load')) {
        document.body.classList.add('mynyte-js-load');
        document.body.style.backgroundColor = 'red';
        document.getElementById('booking-container').style.backgroundColor = '#ddd';
        var changeLinks = document.querySelectorAll("[href='/cinema/Bedford/film/*/times']");
        var logo = document.querySelectorAll(".logo")[0].style.display = 'none';
        var navAccountLink = document.querySelectorAll(".mainnav__account")[0].style.display = 'none';
        for (var a = 0; a < changeLinks.length; a++) {
          changeLinks[a].style.display = 'none';
        }
        document.querySelectorAll('#show-ticket-selection')[0].click();
        
        setTimeout(function () {
          // alert('here');
          var popup = document.querySelectorAll('.container--overlay');
          if (popup.length) {
            var closeButtons = document.querySelectorAll('.overlay__close');
            for (var a = 0; a < closeButtons.length; a++) {
              closeButtons[a].click();
            }
          }
          var select = document.querySelectorAll('.icon-arrow-down');
          var selectOptions = document.querySelectorAll('select[areaid="standard"]')[0].querySelectorAll('option');
          alert(select);
          for (var a = 0; a < select.length; a++) {
            select[a].click();
          }
          for (var a = 0; a < selectOptions.length; a++) {
            if (selectOptions[a].value === '3') {
              alert('click');
              alert(selectOptions[a].value);
              selectOptions[a].click();
              select.value = selectOptions[a].value;
            }
          }
          var closeTicketsButton = document.getElementById('close-tickets');
          closeTicketsButton.click();
          // window.ReactNativeWebView.postMessage('initialJsRun');
        }, 3000);
        
      }
    }
    setTimeout(onLoad, 1000);
    false;
  ` : ``;

  const runOnLoadForLogin = `
    var count = 0;

    function loginClicked() {
      count += 1;
      window.ReactNativeWebView.postMessage(count);
    }

    function onLoad() {
      var usernameInput = document.getElementsByName('session[username_or_email]');
      var passwordInput = document.getElementsByName('session[password]');
      if (usernameInput.length === 0 || passwordInput.length === 0) {
        setTimeout(onLoad, 100);
      }
      else {
        for (var a = 0; a < usernameInput.length; a++) {
          var type = usernameInput[a].type;
          if (type === 'text') {
            usernameInput[a].value = 'ss@s.com';
          }
        }
        
        for (var a = 0; a < passwordInput.length; a++) {
          var type = passwordInput[a].type;
          passwordInput[a].value = 'password';
        }

        var loginButton = document.getElementsByTagName('div');
        var loginClickedCount = 0;
        for (var a = 0; a < loginButton.length; a++) {
          var role = loginButton[a].getAttribute('role');
          var dataTestId = loginButton[a].getAttribute('data-testid');
          if (role === 'button' && dataTestId === 'LoginForm_Login_Button' && loginClickedCount < 3) {
            // alert(dataTestId);
            // loginButton[a].addEventListener('click', loginClicked);
            loginButton[a].click();
            loginClickedCount += 1;
          }
        }
      }
    }
    setTimeout(onLoad, 100);
    true;
  `;

  const runAfterLoad = `
    document.body.style.backgroundColor = 'blue';
    true;
  `;

  const runOnLoadEnd = (event: any) => {
    console.log('loadEnd');
    webview.injectJavaScript(runOnLoadGeneralTest);
  }

  setTimeout(() => {
    // webview.injectJavaScript(runAfterLoad);
  }, 3000);

  const eventReceivedFromPage = (event: WebViewMessageEvent) => {
    const { nativeEvent } = event;
    alert(nativeEvent.data);
    if (nativeEvent.data === 'initialJsRun') {
      initialJsRun = true;
    }
  };

  const handleWebViewNavigationStateChange = (newNavState: NavStateProps) => {
    const { url } = newNavState;

    if (!url || url === currentUrl) return;
    setCurrentUrl(url);
    // alert(url);

    // handle certain doctypes
    if (url.includes('/blog')) {
      webview.stopLoading();
      navigation.goBack();
      // open a modal with the PDF viewer
    }

    // login error
    if (url.includes('/error?redirect_after_login')) {
      webview.stopLoading();
      alert('Log in details failed');
      navigation.goBack();
      // maybe close this view?
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      webview.injectJavaScript(redirectTo);
    }
  };

  setTimeout(() => {
    // webref.injectJavaScript(runAfterLoad);
  }, 3000);

  return (
    <View style={styles(theme).container}>
      <WebView
        containerStyle={styles(theme).webview}
        ref={(ref) => webview = ref}
        source={{
          uri:
            'https://www.myvue.com/book-tickets/summary/10092/169935/40188#',
        }}
        onMessage={(event) => { eventReceivedFromPage(event) }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        onLoadEnd={(event) => {runOnLoadEnd(event)}}
      />
    </View>
  )
};
