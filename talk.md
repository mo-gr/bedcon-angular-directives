# AngularJS Directive Crash Course

Hallo, ich bin Moritz Grauel. Schön, dass ihr alle hier seid. Ich werde euch heute einen Crash Course zum schreiben von eigenen Direktiven in AngularJS geben. Hoffentlich eher nicht so einen Crash Course

**Bild von einem Unfall (Fahrschule?)**

Sondern eher so einen Crash Course

**positiven Bild eines Crash Course**

Aber eins nach dem anderen. Zu erst möchte ich mich ganz kurz vorstellen. 

**slide mit tagline**

Ich bin Moritz. Ich bin freiberuflicher Software Entwickler hier in Berlin mit einem starken Fokus Java-, oder sagen wir mal JVM-basierten Web Anwendungen. Normalerweise bringe ich jetzt an dieser Stelle immer gerne den Witz, dass ich ja vermutlich der einzige echte Berliner hier im Raum bin. Aber die letzten male ist das irgendwie immer nach hinten losgegangen. Kommen die Berliner wieder zurück in ihre Heimat? Na egal...

Jedenfalls verdiene ich jetzt seit über 7 Jahren meinen Lebensunterhalt mit Software. Angefangen habe ich mal als Java Backend Entwickler. Irgendwann habe ich dann auch mal eine Zeit lang iOS Apps gebaut und seit ein paar Jahren drifte ich immer mehr in Richtung Webfrontend und fühle mich da eigentlich auch sehr wohl. Es ist ein spannendes, sich schnell verändern Feld, in dem gerade viel passiert. Ich finde es insbesondere spannend, wie so langsam auch im Frontend funktionale Konzepte immer mehr Einzug halten. Aber das ist eher ein Thema für einen anderen Talk... Also genug zu mir... Kommen wir zu...

**slide mit AngularJS logo**

...AngularJS. Ich denke mal, die meisten hier im Raum haben zumindest schon mal von AngularJS gehört.
AngularJS nennt sich selbst Super Heroic JavaScript Model View Whatever Framework. Was genau soll das bedeuten?
Im wesentlichen ist AngularJS ein weiteres ModelViewController Framework um client seitiges JavaScript besser zu strukturieren.   Also im wesentlichen Vergleichbar mit Backbone, Ember.js, knockout und wie sie nicht alle heißen. 
Inzwischen könnte man sogar fast anfangen, AngularJS als abgehangene Software zu bezeichnen. Immerhin hatte Angular seinen ersten öffentlichen release 2009, also for 5 Jahren. Wenn man sich diverse MVC Frameworks anschaut - nicht nur im Web - wird man feststellen, dass sich eigentlich alle recht einig sind, was ein Model ist und welche Aufgaben es hat. Auch bei der View gibt es mal von Backbone abgesehen relativ wenig Diskussion über die Aufgabe. Oh man, ich sage lieber gar nicht, wie lange ich gebraucht habe um zu Verstehen, dass das, was Backbone eine View nennt in meinem kleinen Welt Controller heißt. Und da sind wir auch schon beim Kern der Diskussion. Über die genaue Form und aufgabe des Controllers gibt es erstaunlich vielfältige Diskussionen. Model View Controller, Model View Presenter, Model View View-Model und so weiter. Um diesen Diskussionen zumindest ein wenig aus dem weg zu gehen ist nennt sich Angular schlicht Model-View-Whatever Framework.
Noch ein paar ganz kurze Zahlen und Fakten zu AngularJS.

**slide mit Angular Fakten**

AngularJS hat das Licht der Welt als eines der berühmten 20% Projekte bei Google erblickt. Inzwischen ist es aber ein gesundes, aktives Open Source Projekt mit über 400 Kontributoren auf github. Aktuell ist die Version 1.2.15 auf die sich mein Vortrag auf bezieht, aber die Community hat gerade angefangen, sich öffentlich über die 2.0 Roadmap zu unterhalten. Ach ja - weil das erstaunlich oft als Frage kommt: AngularJS steht unter der MIT Lizenz.

**slide mit core features**

Was macht AngularJS denn nun so besonders? Was hebt es von der Masse ab? In meinen Augen hat AngularJS vor allem vier Killer Features, die es besonders machen
1. Sehr starker Fokus auf Modularität & Testbarkeit
2. Dependency Injection
3. 2 way data binding
4. Templating System

In all diesen Bereichen hat AngualarJS sehr interessante und oft auch innovative Ansätze. Doch innovative Ansätze haben in der Regel auch ein Problem - die Lernschwelle.

**slide mit lernkurven**

*kurz zu lernkurven schwafeln*

**slide mit Angular kurve**

Am Anfang kann AngularJS ein wenig... na sagen wir mal eigen wirken. Insbesondere das Data Binding und die Dependency Injection haben auf den ersten Blick etwas magisches an sich. All das erschwert einem vielleicht zu Beginn den Einstieg. Doch ich kann euch versichern, es lohnt sich, sich dieser Hürde zu stellen!
Wenn man erst ein mal die grundlegenden Konzepte verstanden und verinnerlicht hat, dann kann man mit AngularJS in sehr kurzer Zeit, beeindruckendes umsetzen - und die meiste Zeit hat man dabei eigentlich auch immer Spaß.

Ich vermute, die meisten hier im Raum haben sich schon mehr oder weniger mit AngularJS befasst, aber ich will trotzdem mit einem kurzen Beispiel einsteigen und einfach mal zeigen, wie AngularJS  aussieht. Und wie viel man in Angular mit sehr wenig code erreichen kann.

**->IDE, hello world example mit API call. etwa 5 min**

*Fokus auf DI, zuletzt erklären, was hier alles direktiven sind*

**slide direktive**

Ok, wir haben gerade ein paar direktiven gesehen. Direktiven sind irgendwie der magische Feenstaub, an angulars templating System. 
Direktiven. Irgendwie ein schwammiger Begriff. Mir war am Anfang nicht so ganz klar, was ich mir genau unter eine Direktive vorzustellen habe. Aber eigentlich ist das ganz einfach. Eine Direktive ist nicht viel mehr als ein marker im DOM, mit dem ich Angular sage, dass es an dieser Stelle im DOM code ausführen muss. 

**Direktiven sind marker im DOM**

Wir haben jetzt gerade schon ein paar Direktiven gesehen, die AngularJS mitbringt. Aber Angular ermöglicht es natürlich auch, eigene solche Direktiven, also eigene Attribute und Tags zu erfinden mit denen ich beliebige Funktionalität im DOM verankern kann. Dadurch ermöglicht AngularJS einen sehr ausdrucksstarken, deklarativen Programmierstil.
Eigene Direktiven sind ein ganz wichtiges Puzzlestück um elegante, wartbare Anwendungen in AngularJS zu schreiben.

Leider sehen viele Entwickler, die neu zu AngularJS kommen, Direktiven oft als fortgeschritteneres Feature an und fangen erst viel zu spät an, sich damit zu befassen. 
Mein Ziel für heute ist es, euch zu zeigen, dass Direktiven, insbesondere selbsgeschriebene, viel weniger Magie beinhalten, als man vielleicht vermuten mag.

Ich denke mal, alle hier im Raum haben schon mal mit jQuery gearbeitet. Direktiven invertieren quasi das Model von jQuery. Während man bei jQuery in der Regel anhand von irgendeinem mehr oder weniger komplexen Selektor nach Elementen im DOM fischt, um diesen Leben ein zu hauchen, markiert man bei AngualarJS die Elemente im DOM mit einer Direktive. 

**slide jQuery vs direktiven**

Ich möchte gar nicht wissen, wie viel Zeit ich schon damit verbracht habe in riesigen jQuery Projekten nach der richtigen Stelle zu Suchen die dafür sorgt, das dieses ein div sich beim click merkwürdig verhält nur um festzustellen, dass der entsprechende Selektor dazu dann irgendwie so aussieht

**$('#content form > ul ~ input + div').on('click', fmlHandler);**

Das ganze hätte in AngularJS hoffentlich eher so ausgesehen

**<div ng-click="fml()">**

Die Zuordnung von Funktionalität zu DOM Elementen passiert bei AngularJS in meinen Augen expliziter und vor allem immer im Template. 

Ich denke, am besten ist es, ich zeige euch mal, was man tun muss um eine eigene Direktive in AngularJS zu schreiben.

**->IDE, hello-direktive example, zunächst Kurzform, dann langform**

**slide zur linkfunktion**

Eine Direktiven kann man sich im Kern also erstmal als eine JavaScript Funktion vorstellen, die den aktuellen scope, das entsprechende DOM Element und dessen Attribute als Parameter übergeben bekommt. 

**evtl joke über jQuery**

Ist doch gar nicht so kompliziert, oder? Ein bisschen komplizierter wird es nachher schon noch, aber bevor wir richtig loslegen will ich mal kurz erklären, was alles in eigene direktiven gehört und was man eher an anderer Stelle im Projekt unterbringen sollte.

**slide wann direktiven?**

Üblicherweise versucht AngualarJS die böse Welt des Browsers so weit wie möglich aus der Anwendung und ihrer Logik fern zu halten. Denn das, was in JavaScript oft den größten Schmerz bereit ist die DOM Interaktion. Aber ganz kommt man auch in AngularJS nicht um den DOM herum. Und in 90% aller fälle sollten DOM Interaktionen immer in Direktiven verpackt werden. Also Faustregel Nummer 1: Direkte DOM Interaktionen gehören in eigene Direktiven.

**advance slide: DOM**

Der zweite große Einsatzpunkt von Direktiven ist die Integration von 3rd Party Bibliotheken. Wenn man irgendwelche spannenden JavaScript Bibliotheken einbindet, insbesondere solche, die irgendwie mit dem DOM interagieren ist es fast immer die beste Wahl eine oder mehrere Direktiven zu bauen, die die Bibliothek abkapseln. Dazu werden wir später auch noch ein Beispiel haben.

**advance slide: 3rd party**

Der nächste Große Einsatzzweck von direktiven sind UI Widgets. Irgendwie wiederverwendbare UI Komponenten, wie etwa drop down boxes, alerts, pagination footer. Solche Dinge gehören in eigene Direktiven.

**advance slides: UI widgets**

Und zu guter letzt kann man direktiven auch einfach als mittel des templating verwenden.

**advance slides: templates** 

Man fasst also komplexe DOM Konstrukte einfach in einer aussagekräftigen Direktive zusammen

**beispiel slide**

So könnte das zum Beispiel aussehen.

**slide zurück**

Ein schönes Beispiel, das all diese dinge kombiniert, also eine DOM-lastige 3rd party widget Bibliothek bereit stellt ist übrigens angular-ui

**slide angular-ui**

Angular-ui ist ein Projekt, das die UI Widgets aus dem bekannten Twitter Bootstrap in direktiven verpackt und sie für angularjs sehr pragmatisch nutzbar macht. Der source code von angular-ui ist bestens geeignet um mehr über direktiven zu lernen und sich anzuschauen, wie andere Leute, Schwierigkeiten lösen, die beim entwickeln von wiederverwendbaren direktiven entstehen.

Und was sollte man besser nicht in direktiven verpacken?
Insbesondere sollte man sich davor hüten zu viel Logik in direktiven zu haben. 

**slide wenig businesslogik**

Direktiven interagieren überlichweise mit dem DOM. Das gibt ihnen schon genug Komplexität. Businesslogik, sofern sie Clientseitig notwendig ist, sollte nach Möglichkeit eher nicht in direktiven landen. Die ist in Services deutlich besser aufgehoben. So sollte eine Direktiven zum Beispiel selber keine AJAX calls machen.

Also alles, was nicht mit dem DOM oder anderen JavaScript Bibliotheken interagiert gehört weiterhin eher in Services und Factories.

Ok. Nach dem wir nun wissen, was alles in eine gute Direktive gehört, mal ein etwas formalerer Blick auf die Deklaration von Direktiven.

**slide: declaring directives**

Eine Direktive wird immer im Kontext eines modules deklariert. In kleinen Projekten ist überlicherweise einfach die Angular App. Aber in größeren und komplexeren Anwendungen kann es durchaus sinn machen, direktiven in ein eigenes Modul aus zu lagern. Die directive-Funktion erwartet zwei parameter. Den normalisierten String Namen der Direktive und die Funktion, die die Direktive deklariert. Diese Funktion nimmt am Dependecy Injection system von Angular teil, hier können also Abhängigkeiten injiziert werden und es kann auch die Array Syntax verwendet werden. Diese factory Funktion muss üblicherweise ein Objekt zurück geben, welches das verhalten der direktiven deklariert. Bei einfachen direktvine, wie vorhin in unserem Beispiel kann man auch einfach nur die Link Funktion zurück geben.

Ich habe den Namen der Direktive gerade "normalisierten Namen" genannt. Das bedeutet, der Name wird in CamelCase geschrieben. Wenn Angulars template compiler eine Direktive vorfindet, wird zunächst ihr Name normalisiert

**slide normalisierung**

Das ermöglicht es bei Bedarf, W3C oder XHTML konforme templates zu schreiben. x-, oder data- Präfixe werden von Attributen abgeschnitten und alle Vorkommen von :, - und _ werden zu camelCase umgewandelt.

Die Normalisierung ermöglicht es einem auch, seine eigenen direktiven mit einem Prefix zu versehen. Spätestens, wenn  man in Erwägung zieht, direktiven in mehreren Projekten zu verwenden sollte man das auch tun. Aber es ist natürlich eine ganz schlechte Idee, Direktiven mit ng- zu Präfixen. Selbst wenn es jetzt noch keine Kollisionen kommt kann das natürlich in der Zukunft immer hinzukommen.

Attribute und Elemente sind übrigens nicht die einzigen möglichen Formen von Direktiven. Es sind nur die gebräuchlichsten. Es gibt noch zwei weitere

**slide formen**

Direktiven können auch CSS Klassen sein. Damit nähern wir uns dem Marker-Model von jQuery schon recht deutlich an. Ich würde aber niemandem raten, diese From von direktiven zu verwenden. Der einzige Grund, den ich sehe ist, wenn man Funktionalität an Markup hängen möchte, dass man nicht selbst kontrolliert. Aber in diesem Fall ist AngularJS vielleicht sowieso nicht die allerbeste Wahl. Und die letzte Form von Direktiven ist noch seltener. Direktiven können auch die Form von HTML Kommentaren annehmen. Das würde ich als geradezu böse bezeichnen. Kommentare sollten keine Funkion haben. Der einzige mir bekannte Einsatzzweck hierfür ist, wenn man beispielsweise in Tabellen valides markup erzeugen möchte und aus irgendwelchen gründen keinen Attribute verwenden will. Zwischen einem <tbody> und einem <tr> darf beispielsweise kein anderes Element stehen. Hier könnte man dann seinen tabellenbody als Kommentar angeben. Naja... Wer's braucht. Am besten ihr vergesst die letzten beiden Formen gleich wieder.

Aber Elemente sind ganz spannend. Selbstverständlich muss man sich keine eigenen Elemente ausdenken. Man kann auch an html-konforme Elemente Funktionen hängen. So kann man Beispielsweise eine Direktiven deklarieren, die alle anchors mit einer logging Funktionalität versieht. Das würde dann in etwa so aussehen:

**->beispiel**

AngularJS macht davon übrigens regen gebrauch und sie versehen ganz viele HTML tags mit direktiven. So wird zum Beispiel bei allen Links mit leerem href der event-default unterbunden. Und auch das form-tag wird über diesen trick heftig aufgebohrt.

Wie wir gerade schon am Beispiel gesehen haben, wird die Form der Direktive über das property 'restrict' festgelegt.

**slide restrict**

Die möglichen Werte sind: _slide ablesen_

Wir kennen jetzt also schon zwei der Properties, die eine Direktive deklarieren. 'restrict' und 'link'

Zum link property gibt es noch etwas wichtiges zu sagen

**slide link**

Die Funktion nimmt NICHT am DependencyInjection teil. Sie wird immer mit dem aktuellen scope, dem element, und den Attributen gerufen. element ist dabei schon jquery/jqlite gewrappt. Um zu symbolisieren, dass hier kein DI statt findet, verwendet man üblicherweise hier scope anstatt $scope.

Die nächsten beiden, die wir uns anschauen werden sind 'template' bzw. 'templateUrl'.

**slide template**

Wie ihr euch sicher schon gedacht habt, haben all diese properties natürlich sinnvolle defaults. Wir können auch einfach ein leeres Objekt zurück geben und angular würde sich nicht beschweren. Die resultierende Direktive wäre nur nicht sehr spannend.
template ermöglicht es uns, den dom an der Stelle, an der die Direktive vorkommt durch zu erweitern. Template ist einfach ein String, der den neuen Content beinhaltet und templateUrl ist eine URL zu einem template in angulars template cache. 
Schauen wir uns mal an, wie das aussehen würde

**->hello directive um template erweitern**

Wie wir sehen, wird das template an die Direktive angehangen. Wenn wir die Direktive lieber ersetzen wollen, können wir ein weiteres property spezifizieren.

**slide replace**

Wenn wir replace auf true setzten, dann ersetzt angular unsere Direktive mit ihrem template. Selbstverständlich können in dem template wieder weitere direktiven vorkommen. Etwaige weitere direktiven, die an unserer Direktive hängen werden dann übrigens auf das neue template übernommen

**->hello directive**

So, wir kennen jetzt zwar noch lange nicht alle properties, die eine Direktive ausmachen, aber genug um uns an unsere erste halbwegs sinnvolle Direktive zu wagen. Findet ihr nicht auch, dass das Internet im allgemeinen zu wenig Geräusche macht? Das sollten wir ändern. Wie wäre es mit einer Direktive, die uns ermöglicht, einen sound zu definieren, der beim Klick auf ein Element ertönt. 

**slide sound direktive**

Und damit das ganze in allen Browsern funktioniert verwenden wir dafür die Bibliothek Howler.js.

**kurz howler seite**

Ich habe vorhin behauptet, Modularität und Testbarkeit seien eine, der Stärken von AngularJS. Damit ihr mir das glaubt, werden wir unsere Direktive test-driven entwickeln. Dann sehen wir auch gleich, was dafür nötig ist, eine Direktive zu Testen.

**slide testing angularjs**

Um eine AngularJS Anwendung oder teile davon zu testen benötigt man neben den eigentlichen Tests im wesentlichen drei dinge. Man braucht eine assertion-bibliothek, die den boilerplate code bereit stellt. Also quasi sowas, wie JUnit in Java. Wir werden dafür jasmine verwenden. Das hat in etwa den gleichen Verbreitungsgrad in JavaScript, wie JUnit in Java.

**advance slides**

dann brauchen wir einen testrunner, der unsere Tests in einer JavaScript engine ausführt. AngularJS verwendet für seine tests karma, und das werden wir auch tun. Karma ist ein testrunner, der die Tests in echten Browsern ausführt und sehr angenehm zu benutzen ist. 

**Advance slides**

Und zu guter letzt braucht man ein wenig angular-spezifischen boilerplate um unsere Direktive zu laden und zu initiieren. Dafür stellt Angular angular-mocks bereit.

Genug der vorrede, machen wir uns die Hände schmutzig.

**->IDE live coding, zunächst kein feedback**

**slide mit fertiger direktive**

**slide mit test Auszug zur direktive**

Ok, was haben wir gerade gelernt?

**summary**

Direktiven, sind eigentlich ganz gut zu testen, es bedarf aber etwas mehr boilerplate um ein test-template zu erzeugen.

Kommen wir noch mal zurück zu unserer noise Direktive. Das ist ja ein klassisches Beispiel für eine 3rd party integration. Was uns aber noch fehlt ist der Rückweg. Nehmen wir einfach mal an, wir wollen eine Anzeige, welcher Sound gerade läuft. Dafür muss Howler uns sagen, wann es fertig ist mit abspielen. Aus zeitgründen mache ich das nicht mehr TDD, aber ich will es euch trotzdem kurz zeigen, da es dabei etwas wichtiges zu beachten gibt.

**->IDE live coding, scope.$watch**

**slide zu 3rd party/$apply**

Fragen zu $apply?

Gut. Eine große Gefahr, beim schreiben von Direktiven ist, dass die Link-Funktion zu groß wird und zu viel tut. Jeder, der schon ein mal direktiven geschrieben hat, kennt das. Alles fängt gut und sauber an, doch eh man sich versieht hat man einen 1000 Zeilen link Funktion - unwartbar und untestbar. Der Beste Weg, die Link Funktion in Kontrolle zu halten ist, ihre Komplexität in Controller und Services aus zu lagern. Dafür können wir unserer Direktive einen Controller mitgeben.

**slide zu controller**

Diesen Controller können direkt inline deklarieren. Mit DI und soße und allem. Aber dann können wir ihn nur schwer testen. Besser, wir geben nur den Namen eines Controllers im gleichen Modul an und deklarieren ihn ausserhalb der Direktive. Einziger Nachteil an dieser Variante, der Controller ist im ganzen Modul sichtbar und verfügbar. Der DirektivenController kann dann seinerseits Services verwenden - natürlich via DI und diese sind natürlich auch testbar. Im besten Fall setzt unsere link Funktion dann nur noch ein paar Event-Handler auf und alles andere regelt der Controller.

**slide mit controller example**

Den Kontroller eine Direktive können wir aber auch anderweitig verwenden. Man kann ihn sehr elegant verwenden um eine Kommunikation von mehreren Direktiven untereinander zu ermöglichen.

**slide cross-field**

Nehmen wir als Beispiel eine cross-fiel validation Direktive. Diese muss den aktuellen wert der ng-model Direktive kennen kennen um ihn mit dem wert des anderen Feldes zu vergleichen und ggf das model als invalide deklarieren. Schauen wir uns mal an, wie man so eine cross-field validierung bauen würde

**->live coding**

**slide require**

Mit require können wir also den Controller einer anderen Direktive als dependency erhalten. wir können diese auch als optional deklarieren und angeben, dass diese auch weiter oben im DOM liegen kann.
Gibt es hierzu Fragen?

Dann kommen wir jetzt zu dem property, dessen Name ich am einschüchternsten Finde "transclusion"

**slide transclusion**

Oft kommt es vor, dass man den content einer Direktive an anderer Stelle verwenden möchte. Zum Beispiel bei einer MessageBox Direktive

**slide message box sample**

Um an den Inhalt der Direktive zu gelangen, transkludiert man diesen im neuen Template. Dazu muss man seiner Direktive sagen, dass sie transklusion unterstützen soll und verwendet dann innerhalb des neuen templates 'ng-transclude'. 

**slide message box directive code**

Im wesentlichen kann man sich transklusion also als inklusion vorstellen. Warum aber dann dieser einschüchternde Name? Das hat im wesentlichen mit Angulars Scope Mechanismus zu tun. Wenn man DOM Elemente von einer Stelle an eine andere bewegt, dann muss man sich bei Angular Fragen, was mit dem Score passieren soll. Im Fall von transklusion wird der transkludierte DOM Inhalt mit dem Scope an der ursprünglichen Stelle assoziiert und nicht mit dem Scope in der Direktive.

Und das bringt uns dann auch zum letzten großen Punkt für Heute. Scope in eigenen Direktiven

**slide scope**

Scope ist auch so eine dieser Sachen, über die man gewöhnlich stolpert, wenn man mit AngularJS anfängt. Scope ist quasi das duck-tape, das die view und den Controller zusammen hält. Im score leben die Werte, die im View angezeigt werden, es ist also quasi sowas, wie ein ViewModel und ausserdem gibt der scope auch Zugriff auf die Funktionen, die ein Controller dem View zur Verfügung stellt.
In Angular gibt es üblicherweise mehrere, hierarchische Ebenenen von Scope, die prototypisch von einander Erben.
Also wenn ich eine wert in meinem aktuellen scope suche und dieser ist nicht da, dann schaut angular auch im parent-scope nach diesem wert und so weiter bis man beim root-scope angelangt ist. Der RootScope wird von der ng-app Direktive eröffnet. Und andere Direktiven, wie etwa ng-controller erzeugen jeweils neue child-scopes.
Daran kann man schon sehen, dass es wichtig ist, sich über scope Gedanken zu machen, wenn man eine Direktive erzeugt. Als Author von Direktiven hat man drei Möglichkeiten

**slide scope varianten**

Zum einen kann man einfach sagen, meine Direktive erzeugt keinen eigenen scope. Das ist auch der Default. Das macht die Direktive zwar sehr einfach, aber auch sehr wenig wiederverwendbar. Und in einem gewissen sinne auch gefährlich, da die Direktive versehentlich variablen im umliegenden scope überschreiben könnte.
Die zweite Variante ist, dass die Direktive einen eigenen scope aufmacht, der prototypisch vom umliegenden scope erbt. In Angular tun das zum Beispiel ng-controller, ng-view und ng-include. Für direktiven, die als semantisches template fungieren, also etwa ein Tab <navigation-menu> ist das oft die beste Wahl.
Und die dritte Option ist auch gleichzeitig die komplizierteste. Eine Direktive kann einen sogenannten isolate scope aufmachen. Dann bekommt sie einen eigenen scope, der nicht in einer vererbungsbeziehung zum umliegenden scope steht. Er ist isoliert, wie der Name schon sagt. In diesem isolate scope kann man dann mappings in andere scopes anlegen. Das kann man sich am besten als ein Interface zur Benutzung der Direktive vorstellen.
Diese option ist die beste Option, wenn man wiederverwendbare Direktiven erzeugen möchte, die man anderer stelle oder im optimalfall sogar in anderen Projekten problemlos verwenden kann.

Am besten, wir schauen uns das mal an einem konkreten Beispiel an. Dann kann man sich das besser vorstellen.

**->ide live coding**

**slide isolate scope options mit bild**

Hier noch mal die drei Möglichkeiten beim isolate scope im überblick und darunter visualisiert. Also @ legt quasi einen impliziten watch an und wird mit dem aktuellen wert aktualisiert, kann diesen aber nicht selbst verändern. = legt ein bidirektionales mapping an. Die Direktive kann den wert also auch im umliegenden scope verändern. Und & ermöglicht es, Funktionen im umliegenden scope zu rufen. Wobei der Umgang mit Parametern auf den ersten Blick gewöhnungsbedürftig ist.
Gibt es dazu Fragen? Dann haben wir es fast geschafft...

**slide weitere erlaubte properties**

Jetzt haben wir fast alle properties, die eine Direktive beschreiben ausführlich besprochen. Es fehlen nur noch priority, Terminal und Compile. Über die gehe ich jetzt nur schnell drüber. priority ist einfach ein integer, der die Reihenfolge der Auswertung auf einem element angibt. Mit Terminal kann man die Auswertung weiterer Direktiven abbrechen. Und zu guter letzt compile. Bei Compile handelt es sich um eine Funktion, die von angular gerufen wird um die link Funktion zu erhalten. Man kann also nur entweder compile oder link angeben. Gibt man compile an, so muss diese eine link Funktion zurück geben. Compile wird während der template Compilierung gerufen. Zu diesem Zeitpunkt gibt es noch keinen scope. Das kann man in bestimmten Situationen zur performance Optimierung nutzen - das geht aber über einen Crash Course hinaus.

Also, fassen wir noch einmal zusammen, was eine Direktive aus macht:

**slide mit allen properties**

Gibt es dazu noch Fragen?

Dann habt ihr's geschafft. Ich hoffe, ich konnte euch einen ganz guten Einblick in das schreiben von eigenen Direktiven verschaffen. 

**summary slide**

Es mag vielleicht auf den ersten Blick etwas abschreckend wirken, aber es ist ein sehr flexibler Mechanismus, der einem viele Möglichkeiten bietet und zu sehr deklarativem Markup führt. Und der Einstieg ist wirklich nicht schwer.

Vielen Dank!

**end slide** 

