# motion-demo

## For GKE development environment

### Project setup
```
git clone https://github.com/callezenwaka/motion_demo.git
```

Step 1 - Create cluster (Used console for cost reasons)
```
gcloud container clusters create
```

Step 2 - Initialize cluster on cloud shell or terminal
```
gcloud container clusters get-credentials cluster-name
```

step 3 - Change directory to k8s folder
```
cd k8s
```

Step 4 - Create namespace
```
kubectl apply -f motion-namespace.yaml
```

Step 5 - apply ssl certificates
```
kubectl apply -f motion-cert
```

Step 6 - Create and set up a DNS record pointing at the ip address
```
gcloud compute addresses create motion-ip --global
```

Step 7 - Apply manifests
```
kubectl apply -f motion-api.yaml -f motion-doc.yaml -f motion-pay.yaml -f motion-web.yaml -f motion-ingress.yaml
```