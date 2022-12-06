# Przeprogramowani.pl - Opanuj JavaScript

[See on StackBlitz ⚡️](https://stackblitz.com/edit/wyszukiwarka-sqoksk)
Moduł III. - In Framework realm

## Exercise nr. 4 - Search engine(Wyszukiwarka)

### How to start

Click "Fork" on StackBlitz to copy to your account's dashboard.

### Purpose of exercise (PL: Cel ćwiczenia)

#### ENG

Architecture of application based of components allows to reuse parts of functionality in couple places which makes architerture of application may be not such complicated.

To feel what advantages gives us components, construckt component `SearchComponent`, which allow you restrict list of results, which include inputed text and next you should use this component in 3 other components - list of: tabs, messages and posts. Every new symbol inputed in search bar should result in new search outputs.

#### PL

Architektura aplikacji oparta o komponenty pozwala reużywać wybrane fragmenty funkcjonalności w kilku miejscach, przy zachowaniu stosunkowo niskiej złożoności całego rozwiązania.

Żeby poczuć korzyści jakie niosą za sobą komponenty, zaimplementuj komponent `SearchComponent` który pozwoli ci ograniczać listę wyników do wybranej frazy, a następnie dodaj go do trzech komponentów - listy zakładek, listy wiadomości i listy postów. Wpisywanie wartości w wyszukiwarce powinno dynamicznie sterować zawartością danej listy.
