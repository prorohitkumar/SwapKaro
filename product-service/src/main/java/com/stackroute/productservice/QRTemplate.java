package com.stackroute.productservice;

import com.google.common.base.Charsets;

import java.io.IOException;
import java.net.URL;
import java.util.Map;

public class QRTemplate {

    private String template;
    public QRTemplate(String getTemplate) {
        try {
            this.template = loadTemplate(getTemplate);
        } catch (Exception e) {
            this.template = "Empty";
        }
    }

    private String loadTemplate(String customTemplate) throws Exception {
        URL url = com.google.common.io.Resources.getResource(customTemplate);
        try {
            return com.google.common.io.Resources.toString(url, Charsets.UTF_8);
        } catch (IOException e) {
            throw new Exception("Could not read template  = " + customTemplate);
        }
    }

    public String getTemplate(Map<String, String> replacements) {
        String cTemplate = this.template;
        for (Map.Entry<String, String> entry : replacements.entrySet()) {
            cTemplate = cTemplate.replace("{{" + entry.getKey() + "}}", entry.getValue());
        }
        return cTemplate;
    }
}

