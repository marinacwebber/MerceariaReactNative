# Projeto em Reactnative de uma Mercearia 

- Projeto criado com o intuito de aprender reactnative. Foi criado uma mercearia fictícia utilizando reactnative.


# Anotações importantes 

- (!!estoque <= 0)
- !!estoque: Este trecho é uma forma de garantir que o valor da variável estoque seja convertido para um valor booleano. Os dois operadores de negação (!!) são usados para garantir que o resultado seja um booleano, mesmo que estoque seja originalmente de outro tipo.
</br>

- !!estoque <= 0: Agora, o resultado booleano de !!estoque é comparado com 0 usando o operador de menor ou igual a (<=). Se o estoque for igual a zero ou negativo, o resultado desta expressão será true, indicando que o botão deve ser desativado.
</br>

- Portanto, a constante botaoInativo será true se o estoque for zero ou negativo, indicando que o botão deve ser desativado (disabled). Essa constante é então utilizada para definir a propriedade disabled do componente Button no retorno da função. Se botaoInativo for true, o botão estará desativado; caso contrário, estará habilitado.

## Créditos
- Agradeço ao Alexandre que me deu suporte neste aprendizado. https://github.com/alexandrepalota