# deploy all
serverless deploy -v

# deploy single function, assuming command above has been run
#serverless deploy function -f hello

# deploy function and return logs
#serverless invoke -f hello -l

# tail logs
#serverless logs -f hello -t

# remove
#serverless remove
