## [3.2.0](https://github.com/position-pal/gateway/compare/3.1.1...3.2.0) (2025-03-17)

### Features

* add swagger doc for groups ([764f4db](https://github.com/position-pal/gateway/commit/764f4dbb984a13c93a6963782600d83d398f287a))
* add swagger for: user, auth and chat ([cbc6515](https://github.com/position-pal/gateway/commit/cbc6515d3549973bd72b9d9d0a4aa32dbed7c218))

### Build and continuous integration

* fix fork release ([#162](https://github.com/position-pal/gateway/issues/162)) ([65c2d84](https://github.com/position-pal/gateway/commit/65c2d84702ddb7f7f6bcccb3e34b0e137d296921))

### General maintenance

* untrack swagger output fileD ([7880ddd](https://github.com/position-pal/gateway/commit/7880ddd35bd02d4641b22c3bc4706a392b343bd7))

## [3.1.1](https://github.com/position-pal/gateway/compare/3.1.0...3.1.1) (2025-03-17)

### Bug Fixes

* **ci:** npm install before generating swagger api ([5849b70](https://github.com/position-pal/gateway/commit/5849b7050cfa2b57f382d1ec1ecd7888b2ee2e4d))

## [3.1.0](https://github.com/position-pal/gateway/compare/3.0.1...3.1.0) (2025-03-17)

### Features

* add swagger doc ([defbbf7](https://github.com/position-pal/gateway/commit/defbbf78f202556edb7d8d183cbbf0398fe5ee4a))

### Dependency updates

* **deps:** update dependency @grpc/grpc-js to v1.13.0 ([#157](https://github.com/position-pal/gateway/issues/157)) ([5b1965a](https://github.com/position-pal/gateway/commit/5b1965a48d1a8ef49c41b283dfb79e6fec60d42b))
* **deps:** update dependency axios to v1.8.3 ([#158](https://github.com/position-pal/gateway/issues/158)) ([34cf6e5](https://github.com/position-pal/gateway/commit/34cf6e549cc0db820bbf7f693c83b9e77b17e6db))

### Build and continuous integration

* **deps:** pin legion2/swagger-ui-action action to eff65dc ([#161](https://github.com/position-pal/gateway/issues/161)) ([ddde053](https://github.com/position-pal/gateway/commit/ddde053a93277cfc76df98b8fc5f11e5c2e82fe3))
* **deps:** update actions/setup-node action to v4.3.0 ([#159](https://github.com/position-pal/gateway/issues/159)) ([1802d58](https://github.com/position-pal/gateway/commit/1802d58bede6c599b127dae8e759ee232264885d))
* **deps:** update actions/setup-node digest to cdca736 ([#160](https://github.com/position-pal/gateway/issues/160)) ([840da38](https://github.com/position-pal/gateway/commit/840da383dda7965a0fd84862176025eb941ee7d8))
* **deps:** update docker/login-action digest to 74a5d14 ([#156](https://github.com/position-pal/gateway/issues/156)) ([2cc004a](https://github.com/position-pal/gateway/commit/2cc004ab51244824ab63b4d9a210a7df49d6fe8c))
* do not comment PR for warning about e2e tests if the author is a bot ([ffe4566](https://github.com/position-pal/gateway/commit/ffe456625ae7ee3978299808554e6dd8faca4098))

### General maintenance

* **readme:** update readme ([cf66f77](https://github.com/position-pal/gateway/commit/cf66f77cc0f0e7d1b513ad6407c82fb66a65fd6e))

## [3.0.1](https://github.com/position-pal/gateway/compare/3.0.0...3.0.1) (2025-03-12)

### Dependency updates

* **deps:** update commitlint monorepo to v19.8.0 ([#148](https://github.com/position-pal/gateway/issues/148)) ([bd29771](https://github.com/position-pal/gateway/commit/bd297716d4e2ceba302a3195c8bd394208138458))
* **deps:** update dependency axios to v1.8.2 [security] ([#145](https://github.com/position-pal/gateway/issues/145)) ([343edbc](https://github.com/position-pal/gateway/commit/343edbc72b0e1cbc8029492c1595417ce6830fb2))
* **deps:** update dependency eslint-config-prettier to v10.1.1 ([#147](https://github.com/position-pal/gateway/issues/147)) ([7a2ba5a](https://github.com/position-pal/gateway/commit/7a2ba5a143f09647a6d060036218b2536f408e3d))
* **deps:** update dependency prettier to v3.5.3 ([#140](https://github.com/position-pal/gateway/issues/140)) ([f40ee0d](https://github.com/position-pal/gateway/commit/f40ee0db69058665ae5d51d5d3cc8982e45d2539))
* **deps:** update dependency puppeteer to v24.3.1 ([#143](https://github.com/position-pal/gateway/issues/143)) ([c4374df](https://github.com/position-pal/gateway/commit/c4374df109ddf4761be68df79683f73d1504f4d8))
* **deps:** update dependency puppeteer to v24.4.0 ([#144](https://github.com/position-pal/gateway/issues/144)) ([eeb0a5c](https://github.com/position-pal/gateway/commit/eeb0a5cf62938ca2f27837e2ed2f66b2d2ce9b91))
* **deps:** update eslint monorepo to v9.22.0 ([#149](https://github.com/position-pal/gateway/issues/149)) ([7eb99a3](https://github.com/position-pal/gateway/commit/7eb99a394d0456719349b5bc8637e9405577888b))
* **deps:** update tests/resources/local-deployment digest to 8ccfa9e ([#141](https://github.com/position-pal/gateway/issues/141)) ([733f945](https://github.com/position-pal/gateway/commit/733f945b114ef4257f0a0af0d4e11eba4e9e8c52))
* **deps:** update tests/resources/local-deployment digest to ce00170 ([#154](https://github.com/position-pal/gateway/issues/154)) ([6526ed8](https://github.com/position-pal/gateway/commit/6526ed8d6b5b235ba6672543b84808d5dde26ff0))
* **deps:** update tests/resources/local-deployment digest to d07ea79 ([#139](https://github.com/position-pal/gateway/issues/139)) ([12c9566](https://github.com/position-pal/gateway/commit/12c9566ce7321fb96d002fc3e501c0e652affcf3))
* **deps:** update tests/resources/local-deployment digest to d2f77ea ([#153](https://github.com/position-pal/gateway/issues/153)) ([e80af4a](https://github.com/position-pal/gateway/commit/e80af4a5db9c3721ee68d183628f1b3ff753a4c0))
* **deps:** update tests/resources/local-deployment digest to d52b3ab ([#142](https://github.com/position-pal/gateway/issues/142)) ([cd70bd3](https://github.com/position-pal/gateway/commit/cd70bd3b707c9869d7c7aa6ec0c68c398edaad81))

### Documentation

* **license:** create LICENSE ([5980d24](https://github.com/position-pal/gateway/commit/5980d24c9840661eb0d91120fe314eddf0189268))

### Build and continuous integration

* avoid commenting from workflow in case no integration tests are run but comment through mergify ([a442c84](https://github.com/position-pal/gateway/commit/a442c84b87c410b9afecfd424706154a6228a20b))
* check also is not a pr before failing in case no secrets is available ([8182f46](https://github.com/position-pal/gateway/commit/8182f4678e3ead3bb1029502b539ddb01bfac8e0))
* correctly spot all secrets in the repo ([0e18f26](https://github.com/position-pal/gateway/commit/0e18f267d465305ab1d9f2047dc999eaaede4e6a))
* **deps:** pin thollander/actions-comment-pull-request action to 24bffb9 ([#150](https://github.com/position-pal/gateway/issues/150)) ([28b515a](https://github.com/position-pal/gateway/commit/28b515ac39c0d612c3f8373ea6c5aa781cec79b0))
* **deps:** update dependency ubuntu to v24 ([#151](https://github.com/position-pal/gateway/issues/151)) ([0d4fcb4](https://github.com/position-pal/gateway/commit/0d4fcb4b2b060f423c8512830350e7458b9ea143))
* improve ci to catch non set secrets in PR needed for e2e tests and warn about it ([cc483c1](https://github.com/position-pal/gateway/commit/cc483c134f18a87b3b42376c47549ae3903a3c48))
* improve mergify messages on PRs ([b64bfff](https://github.com/position-pal/gateway/commit/b64bfff3b9e1c1e856d3328d4d984b28c87b7355))
* improve steps name ([ee113f4](https://github.com/position-pal/gateway/commit/ee113f45dd599a8829b2354d8a3d0e1c26daef75))
* remove auto request review since include in shared config ([b7a9cd5](https://github.com/position-pal/gateway/commit/b7a9cd542e16038877af423f1218872d3f9d10a6))
* use correct variable ([ec5420e](https://github.com/position-pal/gateway/commit/ec5420e38766398d9a7c0f16ef314d98c2af1985))

## [3.0.0](https://github.com/position-pal/gateway/compare/2.9.0...3.0.0) (2025-03-05)

### ⚠ BREAKING CHANGES

* **api-deps:** update location-service to v5.x

### Features

* **api-deps:** update location-service to v5.x ([e5f7158](https://github.com/position-pal/gateway/commit/e5f7158c223d3b3ab628443d7931d81f3da2e1e4))

### Dependency updates

* **deps:** update local-deployment digest to 311054c ([#136](https://github.com/position-pal/gateway/issues/136)) ([4a8f884](https://github.com/position-pal/gateway/commit/4a8f8847a8216d867e6ec3899f9d90bc820b6e2d))

### Tests

* complete routes tests with session updates responses checks ([#137](https://github.com/position-pal/gateway/issues/137)) ([7670b65](https://github.com/position-pal/gateway/commit/7670b65ea15f45425bcd5a1193d4b42b3a4eced2))

## [2.9.0](https://github.com/position-pal/gateway/compare/2.8.4...2.9.0) (2025-03-03)

### Features

* change route invocation ([f9f9700](https://github.com/position-pal/gateway/commit/f9f97006c1f6d84cb6face9a7aa54deadc064077))

### Dependency updates

* **deps:** update dependency axios to v1.8.0 ([#131](https://github.com/position-pal/gateway/issues/131)) ([18f5739](https://github.com/position-pal/gateway/commit/18f5739ca16129c3de86d30af9073d0b78255054))
* **deps:** update dependency axios to v1.8.1 ([#132](https://github.com/position-pal/gateway/issues/132)) ([0303dfd](https://github.com/position-pal/gateway/commit/0303dfd4310d68b8f91b084d09e00a40df13a3bf))
* **deps:** update dependency eslint-config-prettier to v10.0.2 ([#133](https://github.com/position-pal/gateway/issues/133)) ([7a2a2e4](https://github.com/position-pal/gateway/commit/7a2a2e46413fbd3af94ae9f9405d6c3fc68a6e24))
* **deps:** update local-deployment digest to 463317b ([#129](https://github.com/position-pal/gateway/issues/129)) ([db9c1bd](https://github.com/position-pal/gateway/commit/db9c1bd8e1337117fc7a70457408ea5d2a0e6737))
* **deps:** update local-deployment digest to 6f3a9ea ([#126](https://github.com/position-pal/gateway/issues/126)) ([f0d2ca3](https://github.com/position-pal/gateway/commit/f0d2ca37b5266615b8e8b89489d6e3e1ce1d195c))
* **deps:** update local-deployment digest to 8011db0 ([#128](https://github.com/position-pal/gateway/issues/128)) ([f302dc5](https://github.com/position-pal/gateway/commit/f302dc51625e1b013ffd99845592961e054fc936))
* **deps:** update local-deployment digest to f103257 ([#130](https://github.com/position-pal/gateway/issues/130)) ([6ff8cc1](https://github.com/position-pal/gateway/commit/6ff8cc1cca28ab8050a64d9dc500306c9313b632))

### Build and continuous integration

* **deps:** update docker/setup-qemu-action digest to 2910929 ([#127](https://github.com/position-pal/gateway/issues/127)) ([09ae880](https://github.com/position-pal/gateway/commit/09ae88030b65efa542a71e8f70338dae8c04c286))

## [2.8.4](https://github.com/position-pal/gateway/compare/2.8.3...2.8.4) (2025-02-28)

### Dependency updates

* **deps:** update dependency puppeteer to v24.3.0 ([#124](https://github.com/position-pal/gateway/issues/124)) ([b673441](https://github.com/position-pal/gateway/commit/b6734418f2dba87ef5e48050c78b7d94e7a698c5))
* **deps:** update local-deployment digest to 38f857a ([#123](https://github.com/position-pal/gateway/issues/123)) ([7a0527c](https://github.com/position-pal/gateway/commit/7a0527cec6b12220874b412a221d59e1ba4101c6))
* **deps:** update local-deployment digest to 65d1256 ([#121](https://github.com/position-pal/gateway/issues/121)) ([2b902b1](https://github.com/position-pal/gateway/commit/2b902b1011d9c4793734b757f91203cc1da2ff82))

### Bug Fixes

* passing parameters of last messages endpoint in the url like a proper get request ([a41a92b](https://github.com/position-pal/gateway/commit/a41a92b94ca0220606b66dd3a783fb29bc793b94))

### Build and continuous integration

* **deps:** update dawidd6/action-download-artifact action to v9 ([#122](https://github.com/position-pal/gateway/issues/122)) ([fbb752f](https://github.com/position-pal/gateway/commit/fbb752fa00990a6a308413d2236e123ffebb0889))

## [2.8.3](https://github.com/position-pal/gateway/compare/2.8.2...2.8.3) (2025-02-27)

### Dependency updates

* **deps:** update local-deployment digest to 263870f ([#119](https://github.com/position-pal/gateway/issues/119)) ([64a1641](https://github.com/position-pal/gateway/commit/64a16412b21ad553d957d874ec562f7b69e5471c))
* **deps:** update local-deployment digest to 43b2bf1 ([#114](https://github.com/position-pal/gateway/issues/114)) ([d3c35db](https://github.com/position-pal/gateway/commit/d3c35db1d31ddb5ccaa66693bee4fb9a258fc147))
* **deps:** update local-deployment digest to 9912a00 ([#118](https://github.com/position-pal/gateway/issues/118)) ([93cdf9f](https://github.com/position-pal/gateway/commit/93cdf9ff3deb170eb567c63a44eb4f05e3045e30))
* **deps:** update local-deployment digest to f061865 ([#120](https://github.com/position-pal/gateway/issues/120)) ([e340b8f](https://github.com/position-pal/gateway/commit/e340b8f0dfdc1016bf0c5bcc167a711bafbb96cf))

### Bug Fixes

* get groups by id route ([c2701f8](https://github.com/position-pal/gateway/commit/c2701f80899b0e26f6cd8cc1a6d88fd9dcbdff05))
* remove middleware for group creation ([f20a49a](https://github.com/position-pal/gateway/commit/f20a49a15f8f65e8447b94bb5420a42e3212de05))

### Build and continuous integration

* **deps:** update docker/build-push-action digest to 471d1dc ([#115](https://github.com/position-pal/gateway/issues/115)) ([034571c](https://github.com/position-pal/gateway/commit/034571cc4cc05fd500906713da144d5b8a2aebb9))
* **deps:** update docker/setup-buildx-action digest to b5ca514 ([#116](https://github.com/position-pal/gateway/issues/116)) ([0b364f3](https://github.com/position-pal/gateway/commit/0b364f3fa94a01a5c07923ecef119fc81421a698))
* **deps:** update docker/setup-qemu-action digest to 5964de0 ([#117](https://github.com/position-pal/gateway/issues/117)) ([f6f1b65](https://github.com/position-pal/gateway/commit/f6f1b6569d05dd1988cb25e101dcf1241241f23e))

## [2.8.2](https://github.com/position-pal/gateway/compare/2.8.1...2.8.2) (2025-02-26)

### Dependency updates

* **deps:** update local-deployment digest to 7c2b7bb ([#113](https://github.com/position-pal/gateway/issues/113)) ([c6d1f7b](https://github.com/position-pal/gateway/commit/c6d1f7bb01c433aa117cb70a7a077c9265ea2519))

### Bug Fixes

* change endpoint param ([398b8dc](https://github.com/position-pal/gateway/commit/398b8dc821acd8c0bf7c766c952547b1e92ff7a8))

## [2.8.1](https://github.com/position-pal/gateway/compare/2.8.0...2.8.1) (2025-02-26)

### Bug Fixes

* change method of get groups ([bab1178](https://github.com/position-pal/gateway/commit/bab1178e6bdb9806ebba27724069d873aaf393fb))

## [2.8.0](https://github.com/position-pal/gateway/compare/2.7.0...2.8.0) (2025-02-26)

### Features

* get groups of user by email ([3eef9dc](https://github.com/position-pal/gateway/commit/3eef9dc0a16cec299dd80fdc1ad3a14aabf513d8))

### Dependency updates

* **deps:** update dependency prettier to v3.5.2 ([#105](https://github.com/position-pal/gateway/issues/105)) ([c78f168](https://github.com/position-pal/gateway/commit/c78f168cbfe5a0719a2a95537c514a38c2af8bc9))
* **deps:** update eslint monorepo to v9.21.0 ([#104](https://github.com/position-pal/gateway/issues/104)) ([10cbbe9](https://github.com/position-pal/gateway/commit/10cbbe96141c598da6efd1643d3f4ed012e54e41))
* **deps:** update local-deployment digest to 3e2cbe9 ([#110](https://github.com/position-pal/gateway/issues/110)) ([58bcdb4](https://github.com/position-pal/gateway/commit/58bcdb414b83ad92a0d5dcc81ae9e9b4cf1ba4eb))
* **deps:** update local-deployment digest to 430f1b5 ([#103](https://github.com/position-pal/gateway/issues/103)) ([5ce2f04](https://github.com/position-pal/gateway/commit/5ce2f04dcc294faa0b1849d4d4f386133a1736a9))
* **deps:** update local-deployment digest to 86f031d ([#108](https://github.com/position-pal/gateway/issues/108)) ([0d614db](https://github.com/position-pal/gateway/commit/0d614db3f9d4185828ac0e9d55887aa90c7e7d1a))
* **deps:** update local-deployment digest to e22baec ([#106](https://github.com/position-pal/gateway/issues/106)) ([bb99fd8](https://github.com/position-pal/gateway/commit/bb99fd861f1635f06fe4f5facc3a6f51dabc6e47))
* **deps:** update node.js to 2094ac6 ([#111](https://github.com/position-pal/gateway/issues/111)) ([9b48d62](https://github.com/position-pal/gateway/commit/9b48d62a312c97426abfe99d5bf1f1c2fbd36fe4))
* **deps:** update node.js to a279671 ([#107](https://github.com/position-pal/gateway/issues/107)) ([a56af59](https://github.com/position-pal/gateway/commit/a56af59ae60982de1d1adb8400af828823dbb7b9))
* **deps:** update node.js to f6b9c31 ([#112](https://github.com/position-pal/gateway/issues/112)) ([d07f106](https://github.com/position-pal/gateway/commit/d07f10649edcd36220403304eadde6fa9788ab0e))

### Build and continuous integration

* **deps:** update nick-fields/retry digest to ce71cc2 ([#109](https://github.com/position-pal/gateway/issues/109)) ([04d5b91](https://github.com/position-pal/gateway/commit/04d5b910b529cb8bea34b869d31bebde60f485f2))

## [2.7.0](https://github.com/position-pal/gateway/compare/2.6.3...2.7.0) (2025-02-24)

### Features

* **grpc:** update proto file for chat service ([6238c8d](https://github.com/position-pal/gateway/commit/6238c8df8e9932b333edc949808588c0c0f83bb1))

### Dependency updates

* **deps:** update dependency globals to v16 ([#99](https://github.com/position-pal/gateway/issues/99)) ([65db4d4](https://github.com/position-pal/gateway/commit/65db4d403c972c15f9ca8f23c7735ac93cad2162))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.125 ([#96](https://github.com/position-pal/gateway/issues/96)) ([32f21ed](https://github.com/position-pal/gateway/commit/32f21edfd170cd5198238549048eab5033a89ac9))
* **deps:** update dependency ws to v8.18.1 ([#101](https://github.com/position-pal/gateway/issues/101)) ([5a808c3](https://github.com/position-pal/gateway/commit/5a808c34447898730d8ef865126df559b5eb8840))
* **deps:** update local-deployment digest to 0b2fc9f ([#95](https://github.com/position-pal/gateway/issues/95)) ([abb9067](https://github.com/position-pal/gateway/commit/abb9067ec82dc14cf9385b3a3240d7df1d04ed61))
* **deps:** update local-deployment digest to 842daec ([#94](https://github.com/position-pal/gateway/issues/94)) ([27363a2](https://github.com/position-pal/gateway/commit/27363a27cd811014f2c38c4b122a45dafa613f2b))
* **deps:** update local-deployment digest to 94e9453 ([#100](https://github.com/position-pal/gateway/issues/100)) ([cd27703](https://github.com/position-pal/gateway/commit/cd277032c154373a131fe24aaba0dadfedde359e))
* **deps:** update local-deployment digest to e2d48cf ([#98](https://github.com/position-pal/gateway/issues/98)) ([4bc3492](https://github.com/position-pal/gateway/commit/4bc3492f71c4c7ae3b0ca237e0a5d4c8f128f844))

### Build and continuous integration

* **deps:** update actions/upload-artifact action to v4.6.1 ([#97](https://github.com/position-pal/gateway/issues/97)) ([db77a68](https://github.com/position-pal/gateway/commit/db77a68b4896b62f0a488731c7247132c101a0e1))

## [2.6.3](https://github.com/position-pal/gateway/compare/2.6.2...2.6.3) (2025-02-20)

### Bug Fixes

* user update ([de8c032](https://github.com/position-pal/gateway/commit/de8c0324f70a907c6c1244966401d577d95ad304))

## [2.6.2](https://github.com/position-pal/gateway/compare/2.6.1...2.6.2) (2025-02-20)

### Dependency updates

* **deps:** update local-deployment digest to 2bd31aa ([#90](https://github.com/position-pal/gateway/issues/90)) ([51b3cb9](https://github.com/position-pal/gateway/commit/51b3cb9818919591f667ae3bd2fe8153a911ff97))

### Bug Fixes

* **ws:** do not forward token to services once authenticated ([#93](https://github.com/position-pal/gateway/issues/93)) ([a52a7b7](https://github.com/position-pal/gateway/commit/a52a7b78d0204857bbe88f079959029a62057e47))

### Build and continuous integration

* **deps:** update docker/build-push-action digest to 0adf995 ([#91](https://github.com/position-pal/gateway/issues/91)) ([2aa6b5a](https://github.com/position-pal/gateway/commit/2aa6b5ac1e6d46a2302ce29f56d96ec1ed1f3d3e))
* **deps:** update jamesives/github-pages-deploy-action digest to 6c2d9db ([#92](https://github.com/position-pal/gateway/issues/92)) ([b907842](https://github.com/position-pal/gateway/commit/b9078429a07ecd9b33c781963a16fb500104ca43))

## [2.6.1](https://github.com/position-pal/gateway/compare/2.6.0...2.6.1) (2025-02-19)

### Dependency updates

* **deps:** update local-deployment digest to 6df9c66 ([#89](https://github.com/position-pal/gateway/issues/89)) ([ce87a35](https://github.com/position-pal/gateway/commit/ce87a3520ba7f6af50cae3f52d1a04f9fd3dd257))
* **deps:** update local-deployment digest to f2397c7 ([#88](https://github.com/position-pal/gateway/issues/88)) ([97b8a65](https://github.com/position-pal/gateway/commit/97b8a654f80c376f47fd6c65e92470e7bdb2d354))

### Bug Fixes

* change get to post ([cd492a1](https://github.com/position-pal/gateway/commit/cd492a15629355c0291f5c6c14735cfc897d27c0))

## [2.6.0](https://github.com/position-pal/gateway/compare/2.5.7...2.6.0) (2025-02-18)

### Features

* getUserByEmail ([#86](https://github.com/position-pal/gateway/issues/86)) ([b60ad55](https://github.com/position-pal/gateway/commit/b60ad5599cb8a0d047f1855f3477d230a8baa79d))

### Dependency updates

* **deps:** update dependency chai to v5.2.0 ([#84](https://github.com/position-pal/gateway/issues/84)) ([40c71ca](https://github.com/position-pal/gateway/commit/40c71ca1bdd244789e11f6862554c437f8de919d))
* **deps:** update local-deployment digest to 04ad736 ([#85](https://github.com/position-pal/gateway/issues/85)) ([df19fe7](https://github.com/position-pal/gateway/commit/df19fe78dfde7c24aa251e2b49e0cf3e04c934f0))
* **deps:** update local-deployment digest to 39230ef ([#83](https://github.com/position-pal/gateway/issues/83)) ([df5ce63](https://github.com/position-pal/gateway/commit/df5ce636d3217beea7b8c337d64b0a1eba87cf1c))
* **deps:** update local-deployment digest to ce5ded7 ([#87](https://github.com/position-pal/gateway/issues/87)) ([2c019c9](https://github.com/position-pal/gateway/commit/2c019c948b4ec717af1bf6ec55aaa8143b60f7d9))

## [2.5.7](https://github.com/position-pal/gateway/compare/2.5.6...2.5.7) (2025-02-17)

### Bug Fixes

* session endpoint correctly handle grpc results stream ([#82](https://github.com/position-pal/gateway/issues/82)) ([68dd40a](https://github.com/position-pal/gateway/commit/68dd40a8a679f74fa1a1eb52d90078245dfcf427))

## [2.5.6](https://github.com/position-pal/gateway/compare/2.5.5...2.5.6) (2025-02-17)

### Dependency updates

* **deps:** update local-deployment digest to 26745c3 ([#81](https://github.com/position-pal/gateway/issues/81)) ([cd418cb](https://github.com/position-pal/gateway/commit/cd418cb383de82d94f14a71bc7dcdd35bbbe9a26))

### Bug Fixes

* cors ([a2d41b7](https://github.com/position-pal/gateway/commit/a2d41b73c781ba80e3d7f8935bb54853b6cd3839))

## [2.5.5](https://github.com/position-pal/gateway/compare/2.5.4...2.5.5) (2025-02-17)

### Dependency updates

* **deps:** update local-deployment digest to 5a7c031 ([#79](https://github.com/position-pal/gateway/issues/79)) ([ff69ce0](https://github.com/position-pal/gateway/commit/ff69ce0749bb8629d3d9f47b66916804c26041b4))

### Bug Fixes

* cors adding options to allowed methods ([#80](https://github.com/position-pal/gateway/issues/80)) ([2871705](https://github.com/position-pal/gateway/commit/2871705b763b21f2a8ea4903578e873c09fc0809))

## [2.5.4](https://github.com/position-pal/gateway/compare/2.5.3...2.5.4) (2025-02-17)

### Dependency updates

* **deps:** pin dependency puppeteer to v24.2.0 ([#72](https://github.com/position-pal/gateway/issues/72)) ([24f8609](https://github.com/position-pal/gateway/commit/24f860969b876bf98dd1ea4650edc793492f09d7))
* **deps:** update dependency prettier to v3.5.1 ([#75](https://github.com/position-pal/gateway/issues/75)) ([fbea3f0](https://github.com/position-pal/gateway/commit/fbea3f01ea60b4aadd602c802cab48ced379a695))
* **deps:** update dependency puppeteer to v24.2.1 ([#77](https://github.com/position-pal/gateway/issues/77)) ([1167b90](https://github.com/position-pal/gateway/commit/1167b908f608fefefb53cfbb90a3e15bbdaa8767))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.124 ([#76](https://github.com/position-pal/gateway/issues/76)) ([f67a15f](https://github.com/position-pal/gateway/commit/f67a15fd368b7e1a35f8431a1867c5cb7e8beb03))
* **deps:** update local-deployment digest to 3de0f5a ([#74](https://github.com/position-pal/gateway/issues/74)) ([c00be4c](https://github.com/position-pal/gateway/commit/c00be4cb4a628885bda5d23475fc5186db51690d))
* **deps:** update local-deployment digest to 53ac0b0 ([#73](https://github.com/position-pal/gateway/issues/73)) ([1bc4d4c](https://github.com/position-pal/gateway/commit/1bc4d4c1857fcd343f60b94bfac9d8dea3025dcc))

### Bug Fixes

* add headers for cors validation ([#78](https://github.com/position-pal/gateway/issues/78)) ([1b7bd56](https://github.com/position-pal/gateway/commit/1b7bd56b5ba815a333d0607c1d001f29aa296cff))

## [2.5.3](https://github.com/position-pal/gateway/compare/2.5.2...2.5.3) (2025-02-16)

### Bug Fixes

* **notification:** use correct env for gRPC endpoint and add e2e tests ([#67](https://github.com/position-pal/gateway/issues/67)) ([3dc97f7](https://github.com/position-pal/gateway/commit/3dc97f783bd08b433ae4277335e3b7f2d7d9bf92))

### Refactoring

* include in gRPC error messages the real cause instead of just an opaque 'gRPC error' ([#71](https://github.com/position-pal/gateway/issues/71)) ([dc52369](https://github.com/position-pal/gateway/commit/dc52369a226d7a8e6689ab64cf530305b08be977))

## [2.5.2](https://github.com/position-pal/gateway/compare/2.5.1...2.5.2) (2025-02-16)

### Dependency updates

* **deps:** update dependency @grpc/grpc-js to v1.12.6 ([#49](https://github.com/position-pal/gateway/issues/49)) ([fae720b](https://github.com/position-pal/gateway/commit/fae720bce614a2d2b2d8a6cbc3466a313f01e7ce))
* **deps:** update dependency eslint to v9.20.1 ([#64](https://github.com/position-pal/gateway/issues/64)) ([aaf200f](https://github.com/position-pal/gateway/commit/aaf200fc8a6e63197886fde787b33d9faf37dd0d))
* **deps:** update dependency globals to v15.15.0 ([#70](https://github.com/position-pal/gateway/issues/70)) ([4ceb18a](https://github.com/position-pal/gateway/commit/4ceb18a7aa6f1eda0c4a51fcf2c40416fbc13830))
* **deps:** update dependency prettier to v3.5.0 ([#56](https://github.com/position-pal/gateway/issues/56)) ([5d64ec6](https://github.com/position-pal/gateway/commit/5d64ec6a4fb8afbcd468497c52ac902d15cca21e))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.123 ([#69](https://github.com/position-pal/gateway/issues/69)) ([bd3a0c9](https://github.com/position-pal/gateway/commit/bd3a0c90122b34f6213ac0d7cd545a267e8b7683))
* **deps:** update eslint monorepo to v9.20.0 ([#51](https://github.com/position-pal/gateway/issues/51)) ([916b97e](https://github.com/position-pal/gateway/commit/916b97e56e110547c99bd54291fcbfaec93f4b02))
* **deps:** update local-deployment digest to 1f51711 ([#58](https://github.com/position-pal/gateway/issues/58)) ([0ab811e](https://github.com/position-pal/gateway/commit/0ab811eedff99456a38ce3d301af881ca8f583b5))
* **deps:** update local-deployment digest to 3fca7b6 ([#63](https://github.com/position-pal/gateway/issues/63)) ([8d96047](https://github.com/position-pal/gateway/commit/8d96047f7409037bcab161994894a89792d26ec3))
* **deps:** update local-deployment digest to 484c082 ([#54](https://github.com/position-pal/gateway/issues/54)) ([75a7568](https://github.com/position-pal/gateway/commit/75a75688e388fdc4bb76e7ca26f02771eb51ae4d))
* **deps:** update local-deployment digest to 575ab82 ([#53](https://github.com/position-pal/gateway/issues/53)) ([2c9905e](https://github.com/position-pal/gateway/commit/2c9905e23ddf44e0be37fcea126c1885687a8834))
* **deps:** update local-deployment digest to 7247834 ([#68](https://github.com/position-pal/gateway/issues/68)) ([788c60c](https://github.com/position-pal/gateway/commit/788c60cc7eed9261a7470421c68e1344b847a77f))
* **deps:** update local-deployment digest to 78b4c33 ([#52](https://github.com/position-pal/gateway/issues/52)) ([daaa72b](https://github.com/position-pal/gateway/commit/daaa72b67b13544ad2976eac21e02aecda3acf03))
* **deps:** update local-deployment digest to 9cf136f ([#59](https://github.com/position-pal/gateway/issues/59)) ([b55435e](https://github.com/position-pal/gateway/commit/b55435e6a4677d9cf6a9959a9b6ab73bf26e378d))
* **deps:** update local-deployment digest to c601bb5 ([#57](https://github.com/position-pal/gateway/issues/57)) ([62428b0](https://github.com/position-pal/gateway/commit/62428b0fd781ae71293d5e92a627336842b2a943))
* **deps:** update local-deployment digest to ccf46ab ([#55](https://github.com/position-pal/gateway/issues/55)) ([1ef9b08](https://github.com/position-pal/gateway/commit/1ef9b088e07157e8337fd0a6e951972e6ee606c3))
* **deps:** update local-deployment digest to e6a5970 ([#65](https://github.com/position-pal/gateway/issues/65)) ([ac817f0](https://github.com/position-pal/gateway/commit/ac817f0d74ca26755bf33effa05febe7b6acb1ec))
* **deps:** update node.js to 22.14 ([#62](https://github.com/position-pal/gateway/issues/62)) ([f2268a7](https://github.com/position-pal/gateway/commit/f2268a75ff000dfbc9c882a28f3e46a19f3c9fa0))
* **deps:** update node.js to 7c6b02a ([#60](https://github.com/position-pal/gateway/issues/60)) ([213f617](https://github.com/position-pal/gateway/commit/213f6173b9ad8afed5cef438949d1109ba51ed6f))
* **deps:** update node.js to cfef443 ([#61](https://github.com/position-pal/gateway/issues/61)) ([86e6a2c](https://github.com/position-pal/gateway/commit/86e6a2ccf0f8d68f956a3b11c62764d6b1afd4e2))

### Bug Fixes

* users endpoint and integration test for the user ([#66](https://github.com/position-pal/gateway/issues/66)) ([f8fbd9e](https://github.com/position-pal/gateway/commit/f8fbd9e8dc6811e96456f93e7739b308c31a1364))

### Build and continuous integration

* publish cucumber reports ([b650b0b](https://github.com/position-pal/gateway/commit/b650b0befd51fa79183ae8d40452a0e2c214f4a2))

### Refactoring

* use optional chaining and simpler control flow ([adf8fd7](https://github.com/position-pal/gateway/commit/adf8fd7d78eb883bce254ff41120aac7ba87fef9))

## [2.5.1](https://github.com/position-pal/gateway/compare/2.5.0...2.5.1) (2025-02-11)

### Bug Fixes

* correctly authenticate ws before forwarding them, improving responses ([#50](https://github.com/position-pal/gateway/issues/50)) ([45fd205](https://github.com/position-pal/gateway/commit/45fd205d1ca91afc98360391f21af1093466f093))

### Tests

* test against the latest code and not the latest published docker image ([#48](https://github.com/position-pal/gateway/issues/48)) ([ec157d5](https://github.com/position-pal/gateway/commit/ec157d5437ed446858ea0ff4d943943146106ae6))

## [2.5.0](https://github.com/position-pal/gateway/compare/2.4.0...2.5.0) (2025-02-07)

### Features

* notification route ([#47](https://github.com/position-pal/gateway/issues/47)) ([d153982](https://github.com/position-pal/gateway/commit/d153982c074458aee86e442e165b57efc119dedd))

## [2.4.0](https://github.com/position-pal/gateway/compare/2.3.0...2.4.0) (2025-02-07)

### Features

* error middleware ([#38](https://github.com/position-pal/gateway/issues/38)) ([cf3fc7a](https://github.com/position-pal/gateway/commit/cf3fc7a708c886bc0c63900822db39d7f0b9c9ce))

### Dependency updates

* **deps:** update commitlint monorepo to v19.7.1 ([#41](https://github.com/position-pal/gateway/issues/41)) ([9389aa5](https://github.com/position-pal/gateway/commit/9389aa50f54c33405e8564970228487e378517d8))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.120 ([#44](https://github.com/position-pal/gateway/issues/44)) ([080027d](https://github.com/position-pal/gateway/commit/080027d39705782b40a3d98cc22953b5a612733e))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.121 ([#45](https://github.com/position-pal/gateway/issues/45)) ([50efab7](https://github.com/position-pal/gateway/commit/50efab76888ad920d14d9ac37997bd30316fc8fb))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.122 ([#46](https://github.com/position-pal/gateway/issues/46)) ([80a31c6](https://github.com/position-pal/gateway/commit/80a31c688ad4c7e1e94f6b7d17e7d1523565b006))
* **deps:** update local-deployment digest to 36b4961 ([#33](https://github.com/position-pal/gateway/issues/33)) ([61f3afc](https://github.com/position-pal/gateway/commit/61f3afc4ccaa7e951221d1a3aeec99753396d6e3))
* **deps:** update node.js to 3962f5a ([#39](https://github.com/position-pal/gateway/issues/39)) ([66d5f87](https://github.com/position-pal/gateway/commit/66d5f87da0dfff1d7d88d82027644e2934124fc8))
* **deps:** update node.js to 5145c88 ([#40](https://github.com/position-pal/gateway/issues/40)) ([fd4f669](https://github.com/position-pal/gateway/commit/fd4f6694598bad39b0c65d2dc8c50fb0ba394d1e))
* **deps:** update node.js to debe7ff ([#37](https://github.com/position-pal/gateway/issues/37)) ([40de6ee](https://github.com/position-pal/gateway/commit/40de6ee5b1f00af7f626743a157b7d1067f19998))

### Build and continuous integration

* **deps:** update docker/setup-buildx-action digest to f7ce87c ([#42](https://github.com/position-pal/gateway/issues/42)) ([2a82eb8](https://github.com/position-pal/gateway/commit/2a82eb8779f51766ac4d64ede494990aa2163327))
* **deps:** update docker/setup-qemu-action digest to 4574d27 ([#43](https://github.com/position-pal/gateway/issues/43)) ([3f7a92b](https://github.com/position-pal/gateway/commit/3f7a92bf6798330edfef8ba25289a6ad720b4007))

## [2.3.0](https://github.com/position-pal/gateway/compare/2.2.0...2.3.0) (2025-02-03)

### Features

* authentication improvement ([321a618](https://github.com/position-pal/gateway/commit/321a618a84733a8dc16f82d40d9f99df035dbbcc))

### Dependency updates

* **api-deps:** update local-deployment digest to cf7c3a8 ([#32](https://github.com/position-pal/gateway/issues/32)) ([6ca3eb3](https://github.com/position-pal/gateway/commit/6ca3eb3c2f1b12c3e06368e253c7870aa602e3e3))

## [2.2.0](https://github.com/position-pal/gateway/compare/2.1.0...2.2.0) (2025-02-02)

### Dependency updates

* **api-deps:** update local-deployment digest to 3000d57 ([#30](https://github.com/position-pal/gateway/issues/30)) ([7b804fd](https://github.com/position-pal/gateway/commit/7b804fd72fd021d13f4b4d67afea9dec0ae87ca1))

## [2.1.0](https://github.com/position-pal/gateway/compare/2.0.1...2.1.0) (2025-02-02)

### Dependency updates

* **api-deps:** update local-deployment digest to 122b6c9 ([#29](https://github.com/position-pal/gateway/issues/29)) ([341af3f](https://github.com/position-pal/gateway/commit/341af3f38d7ed9fd2edf183de0297458497fa7ee))
* **deps:** pin dependencies ([#24](https://github.com/position-pal/gateway/issues/24)) ([c6b002b](https://github.com/position-pal/gateway/commit/c6b002bb3f34686591515ee9cab01f16ff90fd43))
* **deps:** update eslint monorepo to v9.19.0 ([#27](https://github.com/position-pal/gateway/issues/27)) ([f14776b](https://github.com/position-pal/gateway/commit/f14776b21a2162144ee357fe27b46f8b9cda8115))
* **deps:** update local-deployment digest to 3013667 ([#28](https://github.com/position-pal/gateway/issues/28)) ([1d33123](https://github.com/position-pal/gateway/commit/1d33123496020d4e3ee5d9b160b2c542139023df))

### Tests

* add test infrastructure and end-to-end tracking location tests ([#23](https://github.com/position-pal/gateway/issues/23)) ([1e290ef](https://github.com/position-pal/gateway/commit/1e290ef609b3d3449f0fcd34398435d524df0601))

### Build and continuous integration

* **deps:** update actions/setup-node action to v4.2.0 ([#26](https://github.com/position-pal/gateway/issues/26)) ([87fa28a](https://github.com/position-pal/gateway/commit/87fa28a5b2f9837f883ffeb2e287946e198575f6))
* **deps:** update actions/setup-node digest to 1d0ff46 ([#25](https://github.com/position-pal/gateway/issues/25)) ([284a843](https://github.com/position-pal/gateway/commit/284a84392bb126ac0826c431e1b49c6220bbb9a3))

## [2.0.1](https://github.com/position-pal/gateway/compare/2.0.0...2.0.1) (2025-01-25)

### Bug Fixes

* **ws:** add missing require ([251b860](https://github.com/position-pal/gateway/commit/251b8608776e64637eac0cb65e4939f74fc8c652))

## [2.0.0](https://github.com/position-pal/gateway/compare/1.0.0...2.0.0) (2025-01-24)

### ⚠ BREAKING CHANGES

* **grpc:** use latest grpc api version

### Dependency updates

* **deps:** update dependency eslint-plugin-prettier to v5.2.3 ([#20](https://github.com/position-pal/gateway/issues/20)) ([30db5bf](https://github.com/position-pal/gateway/commit/30db5bff09ce245edce9d7bbc6a91a6af513180d))
* **deps:** update node.js to ae2f3d4 ([#21](https://github.com/position-pal/gateway/issues/21)) ([2326807](https://github.com/position-pal/gateway/commit/232680790083516b28d2b5b25411819f92e2e5cb))

### Bug Fixes

* **ws:** fix endpoints and prevent to close and send messages via a not ready ws ([0a88cf0](https://github.com/position-pal/gateway/commit/0a88cf0c467576c09cf5d2556757663114211225))

### Build and continuous integration

* **deps:** pin dependencies ([#18](https://github.com/position-pal/gateway/issues/18)) ([cbaad8f](https://github.com/position-pal/gateway/commit/cbaad8fd463b55bb889e19a9e8d309c7ccb6b756))
* **deps:** update docker/build-push-action digest to ca877d9 ([#22](https://github.com/position-pal/gateway/issues/22)) ([bec432a](https://github.com/position-pal/gateway/commit/bec432a1744641d19aa2a0d21d5cae8881646f7e))
* **deps:** update nick-fields/retry action to v3 ([#19](https://github.com/position-pal/gateway/issues/19)) ([68aa7e5](https://github.com/position-pal/gateway/commit/68aa7e52aff594cb4d8f6901485383b78da9def2))

### Style improvements

* configure maxline to 100 chars ([bf76d39](https://github.com/position-pal/gateway/commit/bf76d39b61f5f5885bb6eec006a378873b33a211))

### Refactoring

* **grpc:** use latest grpc api version ([fac7a38](https://github.com/position-pal/gateway/commit/fac7a38f8eda5418195b6794ca4559c2c1f5dd81))
* replace hardcoded strings with http statuses constants ([3edd362](https://github.com/position-pal/gateway/commit/3edd3626ac53aa92b51f2a8a05f6634e12370340))

## 1.0.0 (2025-01-17)

### Features

* auth complete ([3333f5a](https://github.com/position-pal/gateway/commit/3333f5a91921ee8b8952165a32c7715a6af798cb))
* authentication middleware ([#12](https://github.com/position-pal/gateway/issues/12)) ([9e7eb55](https://github.com/position-pal/gateway/commit/9e7eb55b14dd61757f67e5b111e96c739f43742d))
* chat-service grpc and ws ([#8](https://github.com/position-pal/gateway/issues/8)) ([4677532](https://github.com/position-pal/gateway/commit/4677532f4b160169c6929f1fc0a1a82cda492e14))
* first version of auth ([d840cf4](https://github.com/position-pal/gateway/commit/d840cf4e2ba71b45e864441813acd315016e63fe))
* get proto from repo ([6f7fcb8](https://github.com/position-pal/gateway/commit/6f7fcb8d48ae942120aff6694ef8ad656a44c68b))
* group api ([b377f84](https://github.com/position-pal/gateway/commit/b377f84a22c026407751f51092f6810c50b4888f))
* location grpc ([#9](https://github.com/position-pal/gateway/issues/9)) ([bcaa44b](https://github.com/position-pal/gateway/commit/bcaa44b7273f484bbe05ffe44606be4c8633d8fc))
* user route ([c7e9daa](https://github.com/position-pal/gateway/commit/c7e9daaca34db1a5fabdca82c1eb4787dc704c15))
* websocket for location service ([#7](https://github.com/position-pal/gateway/issues/7)) ([336d12c](https://github.com/position-pal/gateway/commit/336d12cd753d65a76fb49b1a9000b89653691590))

### Dependency updates

* **deps:** add renovate.json ([05405a5](https://github.com/position-pal/gateway/commit/05405a586eb133a7450019862856bc59de93caa6))
* **deps:** pin dependencies ([#3](https://github.com/position-pal/gateway/issues/3)) ([6399be7](https://github.com/position-pal/gateway/commit/6399be78ac01ddbde5d0492434427a92c59ae0c3))
* **deps:** pin dependency @cucumber/cucumber to 11.2.0 ([#15](https://github.com/position-pal/gateway/issues/15)) ([0d3faf9](https://github.com/position-pal/gateway/commit/0d3faf99413fe2534e837de3167d410f6080adbf))
* **deps:** pin dependency prettier to 3.4.2 ([#13](https://github.com/position-pal/gateway/issues/13)) ([15cac5e](https://github.com/position-pal/gateway/commit/15cac5e2bab41fac1b2df7854433162cb9aa84e9))
* **deps:** update dependency @grpc/grpc-js to v1.12.5 ([#6](https://github.com/position-pal/gateway/issues/6)) ([517c5bf](https://github.com/position-pal/gateway/commit/517c5bf2449fed056351e3c4fdd6d7ef84cd8ce8))
* **deps:** update dependency eslint-config-prettier to v10 ([#16](https://github.com/position-pal/gateway/issues/16)) ([610c285](https://github.com/position-pal/gateway/commit/610c285a52036aa974ccfc3958f914d487cd9d83))

### Bug Fixes

* **build:** add override conventional-changelog-conventionalcommits >= 8.0.0 as per semantic-release/release-notes-generator[#657](https://github.com/position-pal/gateway/issues/657) ([3d7ee7d](https://github.com/position-pal/gateway/commit/3d7ee7df00416e88ff504f9190554f7f9a742162))
* user endopoint ([8a36734](https://github.com/position-pal/gateway/commit/8a367348dee1490a48e4047225149516d6457858))

### Tests

* add cucumber configuration and a simple feature ([#14](https://github.com/position-pal/gateway/issues/14)) ([0b8b642](https://github.com/position-pal/gateway/commit/0b8b64291ed20c6dc9783b92264393628dc63cf6))
* ignore tests without configured infrastructure ([235e00e](https://github.com/position-pal/gateway/commit/235e00ede6ef60d1a2c5a22027582407f17b3354))
* Test structure added ([cabaf9a](https://github.com/position-pal/gateway/commit/cabaf9a751fdf745dc9b0aa88e9a33f9678658cf))

### Build and continuous integration

* add git hooks to run test, eslint and commit msg check ([c5fd803](https://github.com/position-pal/gateway/commit/c5fd80365b3fd5a11b051bfc0b237f812fbe43cd))
* add minimal eslint configuration ([a26e838](https://github.com/position-pal/gateway/commit/a26e838fba21be5724b1aa30b7f0c19ba8e2bade))
* align package-lock with package ([10ba137](https://github.com/position-pal/gateway/commit/10ba1378e9118d708408499f17db70d5eed2eb14))
* configure ci pipeline skeleton ([f61a295](https://github.com/position-pal/gateway/commit/f61a2958b2088150c15ce7da26cd397ce763e1a7))
* configure release, dockerfile and it’s publication  ([#17](https://github.com/position-pal/gateway/issues/17)) ([4eea5dd](https://github.com/position-pal/gateway/commit/4eea5dd5d6a4ff37f9a3d526ea69c5de1bae54f1))
* **deps:** pin dependencies ([#11](https://github.com/position-pal/gateway/issues/11)) ([844c34a](https://github.com/position-pal/gateway/commit/844c34a80190504f13b9a33e06e5d25e5b80ea39))

### General maintenance

* configure git attributes for eol ([5a2f355](https://github.com/position-pal/gateway/commit/5a2f3554322ff8c4e8648cdd375d4aec09490c82))
* configure mergify ([7566edf](https://github.com/position-pal/gateway/commit/7566edf953d44c2e1639a55ddcf8f377d01b1d31))
* project structure ([537cc46](https://github.com/position-pal/gateway/commit/537cc4664bdd14e68e0caa118f1b65980f1be6b3))
* relax commitlint rules for commits ([4dd8d23](https://github.com/position-pal/gateway/commit/4dd8d23004e8ee02fe895abcb3b104dd13ebcce4))

### Refactoring

* reformat and rewrite code according to eslint rules ([ad843a4](https://github.com/position-pal/gateway/commit/ad843a4128388786350df8a718f6f834f88be14f))
