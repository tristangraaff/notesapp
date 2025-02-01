import { type ClientSchema, a, defineData, defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});

// export const auth = defineAuth({
//   userPool: {
//     signInAliases: { username: true, email: true },
//     autoVerifiedAttributes: ['email'],
//     passwordPolicy: {
//       minLength: 8,
//       requireLowercase: true,
//       requireUppercase: true,
//       requireNumbers: true,
//       requireSymbols: true,
//     },
//   },
//   identityPool: {
//     allowUnauthenticatedIdentities: false,
//   },
// });
