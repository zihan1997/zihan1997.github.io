# Basics

---

## Deployment

### method 1:
```zsh
helm install [yaml] [name] [folder of chart]
```
> name: service name to be used to run

### method 2:
```zsh
kbectl apply -f
```

## Scale
```zsh
kubectl scale --replicas=0 deployment/app
```
> app: the name of service

## Deletion

### 1. delete deployment
```zsh
kubectl delete deployment [name]
```

### 2. delete service
```zsh
kubectl delete service [name]
```
