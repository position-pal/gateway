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