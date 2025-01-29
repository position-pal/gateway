# PositionPal Gateway

This is the gateway for the PositionPal project.

## Development

For testing purposes, `local-deployment` is a git submodule pointing to the repo where local deployment infrastructure is defined.

A plain clone does not initialize submodules. Special care applies.

```bash
git clone --recurse-submodules <URL> <DESTINATION>
```

If you have already cloned the repo, you can initialize the submodule with:

```bash
git submodule update --init --recursive
```

To update the submodule manually to a specific commit:

```bash
cd local-deployment
git fetch
git checkout <COMMIT>
cd ..
git add local-deployment
git commit -m "chore(deps): update local-deployment digest to <COMMIT>"
```

**Do not checkout to a branch in the submodule, always use a commit hash.**
Checking out to a branch can result different people working on different commits of the submodule!
