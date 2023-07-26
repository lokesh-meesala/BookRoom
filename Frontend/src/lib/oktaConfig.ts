export const oktaConfig ={
    clientId:'0oaain8eg9skSztLu5d7',
    issuer:'https://dev-83125831.okta.com/oauth2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes:['openid','profile','email'],
    pkce:true,
    disableHttpsCheck:true,
}