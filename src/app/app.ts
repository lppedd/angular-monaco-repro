import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

@Component({
  selector: "app-root",
  imports: [],
  templateUrl: "./app.html",
  styleUrl: "./app.less"
})
export class App implements AfterViewInit {
  private readonly monacoEditorRef = viewChild.required<ElementRef>("monacoEditor");
  private readonly editorModel = monaco.editor.createModel("", "plaintext");
  private editor!: monaco.editor.IStandaloneCodeEditor;

  ngAfterViewInit(): void {
    this.editor = monaco.editor.create(this.monacoEditorRef().nativeElement, {
      model: this.editorModel,
      theme: "fm-editor",
      occurrencesHighlight: "off",
      guides: {
        indentation: false,
        highlightActiveIndentation: false,
        highlightActiveBracketPair: false,
        bracketPairsHorizontal: false,
      },
      bracketPairColorization: {
        // Apparently this option does not work.
        // Overwrite 'editorBracketHighlight.unexpectedBracket.foreground' to solve the issue.
        enabled: false,
      },
      lightbulb: {
        enabled: monaco.editor.ShowLightbulbIconMode.Off,
      },
      minimap: {
        enabled: false,
      },
    });
  }
}
