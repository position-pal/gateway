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
