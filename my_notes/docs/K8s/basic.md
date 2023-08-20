# Basics

## Helm

Three concepts

Chart:
> Helm package. Think of it like the Kubernetes equivalent of a Homebrew formula, an Apt dpkg, or a Yum RPM file.

Repository: 
>  the place where charts can be collected and shared

```zsh
helm list            #  list of all deployed releases.

helm create <name>   # Creates a chart directory along with the common files and directories used in a chart.


```
<!-- --- -->

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
