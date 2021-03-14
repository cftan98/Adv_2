using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Talent.Common.Aws;
using Talent.Common.Contracts;

namespace Talent.Common.Services
{
    public class FileService : IFileService
    {
        private readonly IHostingEnvironment _environment;
        private readonly string _tempFolder;
        private IAwsService _awsService;

        public FileService(IHostingEnvironment environment, 
            IAwsService awsService)
        {
            _environment = environment;
            _tempFolder = "images\\";
            _awsService = awsService;
        }

        public async Task<string> GetFileURL(string id, FileType type)
        {
            //Your code here;
            string path = _environment.WebRootPath + "images/";
            path = "blob:https://talentappwebapp20210219183656.azurewebsites.net" + path + id;
            return (path);
            //throw new NotImplementedException();
        }

        public async Task<string> SaveFile(IFormFile file, FileType type)
        {
            //Your code here;
            var fileName = "";
            if (file != null && type == FileType.ProfilePhoto)
            {
                fileName = file.FileName;
                return fileName;
            } else
            {
                return "";
            }
            ;
            //throw new NotImplementedException();
        }

        public async Task<bool> DeleteFile(string id, FileType type)
        {
            //Your code here;
            return true;
            //throw new NotImplementedException();
        }


        #region Document Save Methods

        private async Task<string> SaveFileGeneral(IFormFile file, string bucket, string folder, bool isPublic)
        {
            //Your code here;
            throw new NotImplementedException();
        }
        
        private async Task<bool> DeleteFileGeneral(string id, string bucket)
        {
            //Your code here;
            throw new NotImplementedException();
        }
        #endregion
    }
}
