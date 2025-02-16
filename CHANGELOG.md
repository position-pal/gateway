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
