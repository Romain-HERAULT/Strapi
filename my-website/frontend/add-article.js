// sélectionner le formulaire
// récupérer les infos de l'input "titre" et du textarea "contenu"
// créer l'article
// se connecter au serveur
// envoyer les infos en les attribuant à un nouvel id d'article, ou en écrasant un article existant


const articleForm = document.getElementById("articleForm");
const addArticleButton = document.getElementById("addArticle");

addArticleButton.addEventListener("click", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
        const nouvelArticle = {
            data: {
                title: title,
                description: content
            }
        };
        console.log(nouvelArticle);

        fetch('http://localhost:1337/api/articles', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nouvelArticle)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            .then(data => {
                console.log("Article ajouté avec succès !");

                articleForm.reset();
            })
            .catch(error => {
                console.error("Erreur lors de l\'ajout de l\'article :", error);

            });
    }
});
;
