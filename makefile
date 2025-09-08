# Makefile by @codewithguillaume
gt:
	git add .
	git commit -m "commit"
	git push origin

gtc:
	git pull --no-ff
	make gt

gr:
	git rebase main

gm:
	git switch main
	git pull

gmc:
	make gm
	git checkout -

dev:
	yarn && yarn dev
	# create components

create:
	mkdir src/components/${NAME}
	touch src/components/${NAME}/index.tsx
	echo "export default function $(shell echo $(NAME) | awk '{print toupper(substr($$0,1,1))tolower(substr($$0,2))}')() {\nreturn <div>$(shell echo $(NAME) | awk '{print toupper(substr($$0,1,1))tolower(substr($$0,2))}')</div>\n}" > src/components/$(shell echo $(NAME) | awk '{print toupper(substr($$0,1,1))tolower(substr($$0,2))}')/index.tsx